@extends('layouts.base')

@section('styles')
    <link href="{{ webpack('styles', 'css') }}" rel="stylesheet" type="text/css">
@endsection

@section('content')
    @include('partials.navigation')

    @foreach($sections as $section)
      @include("partials.$section->slug", [
          'section' => $section
      ])
    @endforeach

    @include('partials.services')
    @include('partials.callout')
    @include('partials.portfolio')
    @include('partials.call_to_action')
    @include('partials.map')

    @include('partials.footer')
@endsection
