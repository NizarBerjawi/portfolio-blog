<?php

namespace Portfolio\Portfolio;

use Illuminate\Database\Eloquent\Model;
use Portfolio\Support\Slug\Sluggable;

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
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'slug', 'content', 'sort_order'
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
        'content' => 'json'
    ];

    /**
     * Stores the student Bluecard form data in the entry.
     * The form data is 'translated' to be more readable and stored as
     * a json string.
     *
     * @param $value
     * @return StudentData
     */
    public function setContentAttribute($value)
    {
        $this->attributes['content'] = json_encode($value);
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
}
