<?php

namespace App\Http\Controllers;

use App\Models\Tribe;
use Illuminate\Support\Facades\Route;
use App\Http\Requests\StoreTribeRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TribeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tribes = Tribe::latest()->get();
        return Inertia::render('Tribe/Index', [
            'tribes' => $tribes
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Tribe/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTribeRequest $request)
    {
        Tribe::create(
            $request->validated()
        );

        return redirect()->route('tribes.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Tribe  $tribe
     * @return \Illuminate\Http\Response
     */
    public function show(Tribe $tribe)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Tribe  $tribe
     * @return \Illuminate\Http\Response
     */
    public function edit(Tribe $tribe)
    {
        return Inertia::render('Tribe/Edit', [
            'tribe' => [
                'id' => $tribe->id,
                'name' => $tribe->name,
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Tribe  $tribe
     * @return \Illuminate\Http\Response
     */
    public function update(StoreTribeRequest $request, Tribe $tribe)
    {
        $tribe->update($request->validated());
        return redirect()->route('tribes.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Tribe  $tribe
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tribe $tribe)
    {
        $tribe->delete();
        return redirect()->route('tribes.index');
    }
}
