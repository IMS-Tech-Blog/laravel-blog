@extends('app')
@section('content')
    <h1>Write New Post</h1>
{!! Form::open() !!}
    <div class="form-group">
       {!! Form::label('title','Title:') !!}
       {!! Form::text('title',null,['class'=>'form-control']) !!}
   </div>
   <div class="form-group">
       {!! Form::label('content','Content:') !!}
       {!! Form::textarea('content',null,['class'=>'form-control']) !!}
   </div>
   <div class="form-group">
       {!! Form::submit('Create New Post',['class'=>'btn btn-success form-control']) !!}
   </div>
{!! Form::close() !!}

@stop