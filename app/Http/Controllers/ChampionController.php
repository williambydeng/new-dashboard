<?php

namespace App\Http\Controllers;

use App\Models\Champion;
use App\Models\Rarity;
use App\Models\Region;
use App\Models\Tribe;


use Illuminate\Support\Facades\Route;
use App\Http\Requests\StoreChampionRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChampionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $champions = Champion::with('rarity','tribe','region')->orderBy('rarityId', 'desc')->get();
        return Inertia::render('Champion/Index', [
            'champions' => $champions
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $raritys = Rarity::orderBy('id', 'asc')->get();
        $regions = Region::orderBy('id', 'asc')->get();
        $tribes = Tribe::orderBy('id', 'asc')->get();
        return Inertia::render('Champion/Create', [
            'raritys' => $raritys,
            'regions' => $regions,            
            'tribes' => $tribes,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreChampionRequest $request)
    {
        Champion::create(
            $request->validated()
        );

        return redirect()->route('champions.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Champion  $champion
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Champion  $champion
     * @return \Illuminate\Http\Response
     */
    public function edit(Champion $champion)
    {
        $raritys = Rarity::orderBy('id', 'asc')->get();
        $regions = Region::orderBy('id', 'asc')->get();
        $tribes = Tribe::orderBy('id', 'asc')->get();
        return Inertia::render('Champion/Edit', [
            'champion' => $champion,
            'raritys' => $raritys,
            'regions' => $regions,            
            'tribes' => $tribes,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Champion  $champion
     * @return \Illuminate\Http\Response
     */
    public function update(StoreChampionRequest $request, Champion $champion)
    {
        $champion->update($request->validated());
        return redirect()->route('champions.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Champion  $champion
     * @return \Illuminate\Http\Response
     */
    public function destroy(Champion $champion)
    {
        $champion->delete();
        return redirect()->route('champions.index');
    }
}
