<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Champion extends Model
{
    use HasFactory;    

    protected $fillable = [
        'name', 
        'specie', 
        'tribeId',
        'rarityId',
        'regionId',
        'image',
        'idealPressure',
        'brawl',
        'agility',
        'cunning'
    ];

    public function rarity() {
        return $this->belongsTo(Rarity::class, 'rarityId');
    }

    public function tribe() {
        return $this->belongsTo(Tribe::class, 'tribeId');
    }

    public function region() {
        return $this->belongsTo(Region::class, 'regionId');
    }
}
