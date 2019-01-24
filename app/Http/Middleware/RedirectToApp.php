<?php

namespace App\Http\Middleware;

use Closure;

class RedirectToApp
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        $paths = ['/'];

        if (in_array($request->path(), $paths)) {
            return response()->view('web.index');
        }

        return $next($request);
    }
}
