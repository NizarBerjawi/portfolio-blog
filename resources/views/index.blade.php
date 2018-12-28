@extends('layouts.base')

@section('styles')
    <link href="{{ webpack('styles', 'css') }}" rel="stylesheet">
@endsection

@section('content')
    @include('partials.navigation')
    @include('partials.header')
    @include('partials.about')
    @include('partials.services')
    @include('partials.callout')
    @include('partials.portfolio')
    @include('partials.call_to_action')
    @include('partials.map')
    @include('partials.footer')
@endsection
