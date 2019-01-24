<?php

namespace Portfolio\Portfolio;

use Portfolio\Portfolio\Section;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class SectionCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'data' => SectionResource::collection($this->collection),
        ];
    }
}
