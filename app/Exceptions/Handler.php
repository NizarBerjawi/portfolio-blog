<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Http\Response;
use Illuminate\Database\QueryException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\ValidationException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that should not be reported.
     *
     * @var array
     */
    protected $dontReport = [
        \Illuminate\Auth\AuthenticationException::class,
        \Illuminate\Auth\Access\AuthorizationException::class,
        \Symfony\Component\HttpKernel\Exception\HttpException::class,
        \Illuminate\Database\Eloquent\ModelNotFoundException::class,
        \Illuminate\Session\TokenMismatchException::class,
        \Illuminate\Validation\ValidationException::class,
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {
        if ($request->ajax() || $request->wantsJson()) {
            return $this->getJsonResponse($exception);
        }

        return parent::render($request, $exception);
    }

    /**
     * Get the json response for the exception
     *
     * @param Exception $exception
     * @return \Illuminate\Http\JsonResponse
     */
    protected function getJsonResponse(Exception $exception)
    {
        $debugEnabled = config('app.debug');

        $exception = $this->prepareException($exception);

        /*
         * Handle validation errors thrown using ValidationException.
         */
        if ($exception instanceof ValidationException) {

            $validationErrors = $exception->validator->errors()->getMessages();

            // $validationErrors = array_map(function($error) {
            //     return array_map(function($message) {
            //         return remove_words($message, 2);
            //     }, $error);
            // }, $validationErrors);

            return response()->json(['errors' => $validationErrors], 422);
        }

        /*
         * Handle database errors thrown using QueryException.
         * Prevent sensitive information from leaking in the error message.
         */
        if ($exception instanceof QueryException) {
            if ($debugEnabled) {
                $message = $exception->getMessage();
            } else {
                $message = 'Internal Server Error';
            }
        }

        $statusCode = $this->getStatusCode($exception);

        if (! isset($message) && ! ($message = $exception->getMessage())) {
            $message = sprintf('%d %s', $statusCode, Response::$statusTexts[$statusCode]);
        }

        $errors = [
            'message' => $message,
            'status_code' => $statusCode,
        ];

        if ($debugEnabled) {
            $errors['exception'] = get_class($exception);
            $errors['trace'] = explode("\n", $exception->getTraceAsString());
        }

        return response()->json(['errors' => $errors], $statusCode);
    }

    /**
      * Get the status code from the exception.
      *
      * @param \Exception $exception
      * @return int
      */
     protected function getStatusCode(Exception $exception)
     {
         return $this->isHttpException($exception) ? $exception->getStatusCode() : 500;
     }
}
