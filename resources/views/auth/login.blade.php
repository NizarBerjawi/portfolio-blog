@extends('layouts.base')

@section('content')
    <div id="app"></div>
@endsection

@section('scripts')
    <script src="{{ webpack('admin', 'js') }}"></script>
@endsection
