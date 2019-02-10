<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Portfolio\Portfolio\Section;
use App\Http\Controllers\Controller;
use Portfolio\Portfolio\SectionResource;
use Portfolio\Portfolio\SectionCollection;

class SectionController extends Controller
{
    /**
     * Create a new SectionController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Request $request)
    {
        return new SectionCollection(Section::paginate(5));
    }

    /**
     * Display the specified resource.
     *
     * @param  Section  $section
     * @return Response
     */
    public function show(Request $request, Section $section)
    {
        return new SectionResource($section);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  Section  $section
     * @return Response
     */
    public function update(Request $request, Section $section)
    {
      $data = $request->only($section->getFillable());

      $section->fill($data)->save();

      return new SectionResource($section);
    }
}
