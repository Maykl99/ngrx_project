<?php

namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\Flat;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FlatController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $flats = Flat::all()->where('user_id', '=', Auth::id());
        return response()->json($flats);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $flat = new Flat();
        $flat->title = $request->title;
        $flat->room = $request->room;
        $flat->bed = $request->bed;
        $flat->wc = $request->wc;
        $flat->mq = $request->mq;
        $flat->description = $request->description;
        $flat->image = $request->image;
        $flat->user_id = Auth::id();


        //check file
        /* if ($request->hasFile('image'))
        {
            $file      = $request->file('image');
            $filename  = $file->getClientOriginalName();
            $extension = $file->getClientOriginalExtension();
            $picture   = date('His').'-'.$filename;
            //move image to public/img folder
            $file->move(public_path('img'), $picture);
        } */

        $flat->save();

        if($flat->save()){
            if(Auth::user()->status === 0){
                User::find(Auth::id())->increment('status'); // incrementa il valore status dell'utente loggato
            }
        }

        return response()->json(['status' => 'Success', 'message' => 'Product Saved']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(flat $flat)
    {
        $flat->where('user_id', '=', Auth::id());
        return response()->json(['status' => 'Success', 'data' => $flat]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $product = Flat::find($id);
        $product->title = $request->title;
        $product->room = $request->room;
        $product->bed = $request->bed;
        $product->wc = $request->wc;
        $product->mq = $request->mq;
        $product->image = $request->image;
        $product->description = $request->description;
        $product->save();

        return response()->json(['status' => 'Success', 'message' => 'Product Updated']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $flat = Flat::find($id);
        $flat->delete();
        return response()->json(['status' => 'Success', 'Message' => 'Product Deleted']);
    }
}
