<?php

use Illuminate\Database\Seeder;
use Portfolio\Portfolio\Section;
use Portfolio\Portfolio\SectionResource;

class PortfolioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->createSections();
    }

    private function createSections()
    {
      foreach($this->sections() as $secion => $data) {
          $section = new Section($data);
          $template = array_get($data, 'template');
          $markup = view("partials.{$template}", compact('section'))->render();
          $section->fill(compact('markup'));
          $section->save();
      }
    }

    private function sections()
    {
        return [
            'header' => [
                'name' => 'Header',
                'template' => 'header',
                'sort_order' => 1
            ],
            'about' => [
                'name' => 'About',
                'template' => 'about',
                'sort_order' => 2,

            ]
        ];
    }
}
