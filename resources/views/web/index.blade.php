@extends('layouts.base')

@section('styles')
    <link href="{{ webpack('styles', 'css') }}" rel="stylesheet" type="text/css">
@endsection

@section('content')
    @include('partials.navigation')

    @foreach($sections as $section)
      {!! $section->markup !!}
    @endforeach
@endsection
