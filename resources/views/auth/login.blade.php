@extends('layouts.base')

@section('styles')
    <link href="{{ webpack('styles', 'css') }}" rel="stylesheet">
    <link href="{{ webpack('adminStyles', 'css') }}" rel="stylesheet">
@endsection

@section('content')
    <div id="app"></div>
@endsection

@section('scripts')
    <script src="{{ webpack('admin', 'js') }}"></script>
    <script src="{{ webpack('adminStyles', 'js') }}"></script>
@endsection
