<?php

namespace Portfolio\Portfolio;

use Portfolio\Support\Slug\Sluggable;
use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    use Sluggable;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'portfolio_sections';


    /**
     * The primary key for the model.
     *
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     * The "type" of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'int';

    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'template', 'markup', 'sort_order',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'deleted_at' => 'datetime',
    ];

    /**
     *
     */
    public function getMarkupAttribute($value)
    {
      return $value ?? $this->defaultMarkup();
    }

    /**
     *
     *
     */
    protected function defaultMarkup()
    {
      return view("partials.{$this->template}", ['section' => $this])->render();
    }

    /**
     * Get the attribute name to slugify.
     *
     * @return string
     */
    public function getSlugSourceColumn()
    {
        return 'name';
    }

    /**
     *
     */
    public function getRouteKeyName()
    {
      return $this->getSlugColumn();
    }
}
