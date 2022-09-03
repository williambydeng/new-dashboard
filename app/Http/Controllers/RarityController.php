<?php

namespace App\Http\Controllers;

use App\Models\Rarity;
use Illuminate\Support\Facades\Route;
use App\Http\Requests\StoreRarityRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RarityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $raritys = Rarity::latest()->get();
        return Inertia::render('Rarity/Index', [
            'raritys' => $raritys
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Rarity/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRarityRequest $request)
    {
        Rarity::create(
            $request->validated()
        );

        return redirect()->route('raritys.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Rarity  $rarity
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Rarity  $rarity
     * @return \Illuminate\Http\Response
     */
    public function edit(Rarity $rarity)
    {
        return Inertia::render('Rarity/Edit', [
            'rarity' => [
                'id' => $rarity->id,
                'name' => $rarity->name,
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Rarity  $rarity
     * @return \Illuminate\Http\Response
     */
    public function update(StoreRarityRequest $request, Rarity $rarity)
    {
        $rarity->update($request->validated());
        return redirect()->route('raritys.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Rarity  $rarity
     * @return \Illuminate\Http\Response
     */
    public function destroy(Rarity $rarity)
    {
        $rarity->delete();
        return redirect()->route('raritys.index');
    }
}
