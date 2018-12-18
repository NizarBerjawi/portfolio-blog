@extends('layouts.base')

@section('content')
    <div class="page-holder d-flex align-items-center">
        <div class="container">
            <div class="row align-items-center py-5">
                <div class="col-5 col-lg-7 mx-auto mb-5 mb-lg-0">
                    <div class="pr-lg-5"><img src="{{ asset('dist/img/illustration.svg') }}" alt="" class="img-fluid"></div>
                </div>
                <div class="col-lg-5 px-lg-4">
                    <h1 class="text-base text-primary text-uppercase mb-4">Dashboard</h1>
                    <h2 class="mb-4">Welcome back!</h2>
                    <form action="{{ route('login') }}" method="POST" class="mt-4">
                        @csrf

                        <div class="form-group mb-4">
                            <input type="text" name="email" placeholder="Email address" class="form-control border-0 shadow form-control-lg{{ $errors->has('email') ? ' is-invalid' : '' }}" value={{ old('email') }}>
                            @if ($errors->has('email'))
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('email') }}</strong>
                                </span>
                            @endif
                        </div>

                        <div class="form-group mb-4">
                            <input type="password" name="password" placeholder="Password" class="form-control border-0 shadow form-control-lg text-violet{{ $errors->has('password') ? ' is-invalid' : '' }}">
                            @if ($errors->has('password'))
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('password') }}</strong>
                                </span>
                            @endif
                        </div>

                        <div class="form-group mb-4">
                            <div class="custom-control custom-checkbox">
                                <input class="form-check-input custom-control-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                                <label for="remember" class="custom-control-label">Remember Me</label>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary shadow px-5">Log in</button>
                        <a href="{{ url('/') }}" class="btn btn-secondary shadow px-5">Cancel</a>
                        @if (Route::has('password.request'))
                            <div>
                            <a class="btn-link" href="{{ route('password.request') }}">
                                {{ __('Forgot Your Password?') }}
                            </a>
                        </div>
                        @endif
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
