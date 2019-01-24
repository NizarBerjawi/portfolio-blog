<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Portfolio\Portfolio\Section;
use Portfolio\Portfolio\SectionResource;
use Portfolio\Portfolio\SectionCollection;

class SectionController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        return new SectionCollection(Section::paginate(1));
    }
}
