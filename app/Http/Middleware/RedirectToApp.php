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
      dd($request->path());
        $paths = ['/'];

        if (in_array($request->path(), $paths)) {
            return response()->action('\App\Http\Controllers\PortfolioController@index');
        }

        return $next($request);
    }
}
