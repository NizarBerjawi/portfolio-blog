@extends('layouts.base')

@section('content')
    @include('admin.partials.header')

    <div class="d-flex align-items-stretch">
        @include('admin.partials.sidebar')

      <div class="page-holder w-100 d-flex flex-wrap">
        <div class="container-fluid px-xl-5">

        </div>
        @include('admin.partials.footer')
      </div>
    </div>
@endsection

@section('scripts')
    <script src="{{ webpack('admin', 'js') }}"></script>
@endsection
