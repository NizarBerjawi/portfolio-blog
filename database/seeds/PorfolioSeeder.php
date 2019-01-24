<?php

use Illuminate\Database\Seeder;
use Portfolio\Portfolio\Section;

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
          Section::create([
              'name' => array_get($data, 'name'),
              'content' => array_get($data, 'content'),
              'sort_order' => array_get($data, 'sort_order'),
          ]);
      }
    }

    private function sections()
    {
        return [
            'header' => [
                'name' => 'Header',
                'content' => [
                    'masthead' => 'Lina\'s Portfolio',
                    'headline' => 'Welcome to Lina\'s Portfolio',
                    'button' => [
                        'label'  => 'Find Out More',
                        'style'  => 'btn-primary',
                        'size'   => 'btn-xl',
                        'hidden' => false,
                    ]
                ],
                'sort_order' => 1
            ],
            'about' => [
                'name' => 'About',
                'content' => [
                  'header' => 'Stylish Portfolio is the perfect theme for your next project!',
                  'headline' => 'This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at Unsplash',
                  'button' => [
                      'label'  => 'What we offer',
                      'style'  => 'btn-primary',
                      'size'   => 'btn-xl',
                      'hidden' => false,
                  ]
                ],
                'sort_order' => 2,

            ]
        ];
    }
}
