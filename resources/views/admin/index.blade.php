@extends('layouts.base')

@section('styles')
    <link href="{{ webpack('adminStyles', 'css') }}" rel="stylesheet">
@endsection

@section('content')
    <div id="app"></div>
@endsection

@section('scripts')
    <script src="{{ webpack('app', 'js') }}"></script>
    <script src="{{ webpack('adminStyles', 'js') }}"></script>
@endsection
