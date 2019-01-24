<?php

namespace App\Http\Controllers;

use Portfolio\Portfolio\Section;;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class PortfolioController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {

    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
      // Get all the sections to be displayed on the portfolio
      $sections = Section::get();
      return view('web.index', compact('sections'));
    }
}
