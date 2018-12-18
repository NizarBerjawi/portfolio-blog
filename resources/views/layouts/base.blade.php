<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="description" content="">
        <meta name="author" content="">

        <title>{{ config('app.name', 'Portfolio') }}</title>

        <link href="{{ webpack('styles', 'css') }}" rel="stylesheet">

        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css">

        @yield('styles')
    </head>

    <body id="page-top">

        @yield('content')

        <script src="{{ webpack('vendor', 'js') }}"></script>
        <script src="{{ webpack('common', 'js') }}"></script>
        <script src="{{ webpack('styles', 'js') }}"></script>
        <script src="{{ webpack('app', 'js') }}"></script>

        @yield('scripts')
    </body>
</html>
