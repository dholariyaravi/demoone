import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import reportWebVitals from './reportWebVitals';


import Use from './Practice/Use';
import Fullname from './Practice/Fullname';
import Test from './Practice/Test';
import Data from './Practice/Data';
import Ujs from './Ujs';
import Newdata from './Practice/Newdata';
import Newdata1 from './Practice/NewData1';
import Exam from './Practice/Exam';
import Prectis from './Practice/Prectis';
import JsxData from './Practice/JsxData';
import MYcowiddata from './Practice/MYcowiddata';
import Axiosdata from './Practice/Axiosdata';
import From2 from './Practice/FromData2';
import FromData2 from './Practice/FromData2';
import Myform from './Practice/Myform';
import LocalStoreg from './Practice/LocalStoreg';
import Datafetch from './Task/Datafetch';
import Dataaxios from './Task/Axiosdata';
import From123 from './Task/From123';
import Data432 from './Task/Data432';
import From444 from './Task/From444';
import Api from './Practice11/Api';
import Api1 from './Practice11/Api1';
import Api2 from './Practice11/Api2';
import Api3 from './Practice11/Api3';
import From222 from './Task/From222';
import Fromlo124 from './Task/Fromlo124';
import From555 from './Task/From555';
import Fromsi1 from './Fromsipal.js/Fromsi1';
import Fromfim2 from './Fromsipal.js/Fromfim2';
import Formiktest from './Fromsipal.js/Formiktest';
import Pro12 from './PropasTwo/Pro12';
import Prop1 from './PropasTwo/Prop1';
import Fromtest99 from './Fromsipal.js/Fromtest99';
import Item from './PropasTwo/Item';
import Deleteitem from './PropasTwo/Deleteitem';
import Grid1 from './Grid/Grid1';
import Grid2img from './Grid/Grid2img';
import Classapi from './Class/Classapi';
import Form11 from './Class/Form11';
import Fomr12 from './Class/Form12';

import Formtest from './Testtt/Formtest';
import Datapass1 from './Testtt/Datapass1';

import Task33 from './Task/Task33';
import Form111 from './Task/Form111';
import Mymate from './material/Mymate';
import Memo1 from './Memo/Memo1';
import Usememo from './Memo/Usememo';



import {Provider} from  'react-redux';
import store from './Total/Store/Store';
import Counter from './Total/Counter';
import Formsw1 from './Login/Formsw1';
import Loginsw2 from './Login/Loginsw2';
import Golbal11 from './Login/Golbal11'
import Useref1 from './Useref/Useref1';
import Au111 from './Useref/Au111';
import Header from './New/Header';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import App from './App';
import Error from './New/Error';










const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
    <ToastContainer/>
     {/* <App /> */}
    
   {/* <Use/> */}
   {/* <Fullname/> */}
    {/* <Test/>  */}
    {/* <Ujs/>  */}
   {/* <Data/> */}
   {/* <Newdata/>
   <Newdata1/> */}
    {/* <Exam/> */}
  {/* <JsxData/> */}
  {/* <Prectis/> */}
  {/* <MYcowiddata/> */} 
  {/*  <Axiosdata/> */}
  {/* <Myform/>  */}
  {/* <FromData2/> */}
  {/* <LocalStoreg/> */}
  {/* <Datafetch/> */}
  {/* <Dataaxios/> */}
  {/* <From123/> */}
  {/* < Data432/> */}
   {/* <Api/>  */}
   {/* <Api1/> */}
   {/* <Api2/>  */}
   {/* <Api3/> */}
   {/* <From444/> */} 
   {/* <From222/> */}
   {/* <Fromlo124/> */}
   {/* <From555/> */}
    {/* <Fromsi1/> */}
  {/* <Fromfim2/> */}
  {/* <Formiktest/> */}
   {/* <Pro12/> */}
   {/* <Prop1/> */}
   {/* <Fromtest99/> */}
      {/* <Item/> */}
   {/* <Deleteitem/> */}
   {/* <Grid1/> */}
   {/* <Grid2img/> */}
   {/* <Classapi/> */}
    {/* <Fomr12/> 
    <Form11/> */}


  {/* <Formtest/>
  <Datapass1/> */}
  {/* <Task33/> */}
  {/* <Form111/> */}
  {/* <Mymate/> */}
  {/* <Memo1/> */}
  {/* < Usememo text='my name is ravi dhlariya i am 20 year old i am pursuing Bcom from ms univarshiti'/> */}
  
   {/* <Provider store={store}>
         <Counter/>
  </Provider> */}

  {/* <Formsw1/> */}
  {/* <Loginsw2/> */}
  {/* <Useref1/> */}
  {/* <Au111/> */}
  
  
  
  <BrowserRouter>
  
  <Header/>

  <Routes>
         <Route path="/" element={<App/>} />
          <Route path="/Form11" element={< Form11/>} />
          <Route path="/Grid2img" element={<Grid2img />} />
          <Route path="/Fromsi1" element={<Fromsi1 />} />
          <Route path="*" element={<Error/>} />
          
      
  </Routes>
  </BrowserRouter>
  
 


   
   
  </React.StrictMode>

);

reportWebVitals(); 
