import React, { useEffect, useState } from 'react'
import Inputs from '../layouts/inputs'
import Container from '../layouts/container'
import Heading from '../layouts/Heading'
import SecondPage from './SecondPage'

function FirstPage() {

    let [proff, setProff] = useState('')
    let [phone, setPhone] = useState('')
    let [date, setDate] = useState('')
    let [que, setQue] = useState('')
    let [fO, setFO] = useState('')
    let [sO, setSO] = useState('')
    let [tO, setTO] = useState('')
    let [foO, setFoO] = useState('')
    let [answer, setAnswer] = useState('')

    let [info, setInfo] = useState(()=>{
        let saved = localStorage.getItem('questions')
        return saved? JSON.parse(localStorage.getItem('questions')) : []
    })

    useEffect(()=>{
        localStorage.setItem('questions',JSON.stringify(info))
    },[info])

    let [type,setType] = useState(false) 

    

    function update() {
        if (proff == '' || phone == '' || date == '' || que == '' || fO == '' || sO == '' || tO == '' || foO == '') {
            return alert('তথ্যের ঘরগুলো পূরণ করুন।')
        }
        setInfo((oldvalue) => {

            return [...oldvalue, {
                Profession: proff,
                Phone: phone,
                Date: date,
                Que: que,
                FirstOp: fO,
                SecendOp: sO,
                ThirdOp: tO,
                FourthOp: foO,
                Answer: answer
            }]
        })

        setProff('')
        setPhone('')
        setDate('')
        setQue('')
        setFO('')
        setSO('')
        setTO('')
        setFoO('')
        setAnswer('')


    }


    function deletepro(index){
        setInfo((oldvalue)=>{
          let newvalue = [...oldvalue]
           newvalue.splice(index,1)
           return newvalue
        })
    }


    return (
        <>
            {
               type === true
                ? <div>
                    <Container className=''>
                <h1 className='text-center text-[45px] font-semibold mb-[50px]'>Input Field</h1>
                <div className='flex flex-col gap-[30px] ms-[340px]' >
                    <Inputs type='text' name='profession' className='' placeholder='একটি পেশার নাম লিখুন' onChange={(e) => setProff(e.target.value)} value={proff} />
                    <Inputs type='text' name='phoneNumber' className='' placeholder='ফোন নাম্বার' onChange={(e) => setPhone(e.target.value)} value={phone} />
                    <Inputs type='date' name='date' className='' placeholder='' onChange={(e) => setDate(e.target.value)} value={date} />
                    <Inputs type='text' name='que' className='' placeholder='প্রশ্নটি লিখুন' onChange={(e) => setQue(e.target.value)} value={que} />
                    <Inputs type='text' name='firstOp' className='' placeholder='প্রথম অপশন' onChange={(e) => setFO(e.target.value)} value={fO} />
                    <Inputs type='text' name='secendOp' className='' placeholder='দ্বিতীয় অপশন' onChange={(e) => setSO(e.target.value)} value={sO} />
                    <Inputs type='text' name='thirdOp' className='' placeholder='তৃতীয় অপশন' onChange={(e) => setTO(e.target.value)} value={tO} />
                    <Inputs type='text' name='fourthOp' className='' placeholder='চতুর্থ অপশন' onChange={(e) => setFoO(e.target.value)} value={foO} />
                    <div className='flex gap-x-[35px]'>
                        <h4>সঠিক উত্তরটি নির্বাচন করুন :</h4>
                        <label htmlFor="A" className='inline vertical-middle'><input name='Ans' type="radio" id='A' className='vertical-middle' value={'A'}
                            checked={answer == 'A'}
                            onChange={(e) => setAnswer(e.target.value)}
                        /> A</label>
                        <label htmlFor="B" className='inline vertical-middle'><input name='Ans' type="radio" id='B' className='vertical-middle' value={'B'}
                            checked={answer == 'B'}
                            onChange={(e) => setAnswer(e.target.value)}
                        /> B</label>
                        <label htmlFor="C" className='inline vertical-middle'><input name='Ans' type="radio" id='C' className='vertical-middle' value={'C'}
                            checked={answer == 'C'}
                            onChange={(e) => setAnswer(e.target.value)}
                        /> C</label>
                        <label htmlFor="D" className='inline vertical-middle'><input name='Ans' type="radio" id='D' className='vertical-middle' value={'D'}
                            checked={answer == 'D'}
                            onChange={(e) => setAnswer(e.target.value)}
                        /> D</label>
                    </div>


                </div>
                <button className='ms-[68%] mt-[2%] bg-blue-500 py-[8px] px-[25px] text-lg text-[#ffffff] rounded-[8px]' onClick={update} >সেভ করুন</button>
            </Container>

            <Container className=''>
                <div className='w-[15%] bg-[#a5e0c2d3] text-[#015539] text-center py-[12px] rounded-[8px]'>
                    {
                        `Questios : ${info.length}`
                    }
                    <button onClick={()=> setType(!type)}>Submit</button>
                </div>
            </Container>

            <Container>
                {
                    info.map((items, index) => {
                        return (
                            <div key={index} className='w-[60%] shadow-[0_0_15px_rgba(0,0,0,0.2)] p-[20px] px-[35px] rounded-[8px] mx-auto my-[30px]' >
                                <Heading text={`${items.Profession}- [${items.Phone}]`} className='text-[26px] font-semibold text-[roboto]' />
                                <Heading text={items.Date} className='text-sm' />
                                <Heading text={items.Que} className='text-[22px] font-normal' />
                                <Heading text={items.FirstOp} className='font-normal text-lg p-[5px] ps-[20px] rounded-[8px] w-full shadow-[0_0_15px_rgba(0,0,0,0.2)] my-2 font-[roboto]' />
                                <Heading text={items.SecendOp} className='font-normal text-lg p-[5px] ps-[20px] rounded-[8px] w-full shadow-[0_0_15px_rgba(0,0,0,0.2)] my-2 font-[roboto]' />
                                <Heading text={items.ThirdOp} className='font-normal text-lg p-[5px] ps-[20px] rounded-[8px] w-full shadow-[0_0_15px_rgba(0,0,0,0.2)] my-2 font-[roboto]' />
                                <Heading text={items.FourthOp} className='font-normal text-lg p-[5px] ps-[20px] rounded-[8px] w-full shadow-[0_0_15px_rgba(0,0,0,0.2)] my-2 font-[roboto]' />
                                <Heading text={`${items.Answer} is right Answer`} className='font-normal text-center mt-[15px] w-[180px] mx-auto text-base py-[5px] px-[15px] rounded-[8px]  shadow-[0_0_15px_rgba(0,0,0,0.2)] font-[roboto]' />
                                <button className='font-[roboto] text-[18px] py-[5px] px-[18px] text-white rounded-[8px] cursor-pointer font-normal bg-red-500'  
                                    onClick={()=> deletepro(index)}
                                >Delete</button>
                            </div>
                        )
                    })
                    
                }
            </Container>
                </div>
                :<SecondPage allQue={info}/>
            }


        </>
    )
}

export default FirstPage

