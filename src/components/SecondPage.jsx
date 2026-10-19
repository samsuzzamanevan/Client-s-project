import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { LuArrowLeft } from "react-icons/lu";
import { IoMdSearch } from "react-icons/io";
import { HiMiniShare } from "react-icons/hi2";
import image2 from '../assets/blogger_logo_round_35.png'
import image3 from '../assets/logo.png'

import Image from '../assets/bannar.jpg'

function SecondPage({ allQue }) {




  const [timeLeft, setTimeLeft] = useState(30 * 60 + 59);

  let minute = Math.floor(timeLeft / 60);
  let second = timeLeft % 60;

  useEffect(() => {
    if (timeLeft <= 0) return;

    let counter = setTimeout(() => {
      setTimeLeft(oldTime => oldTime - 1);
    }, 1000);

    return () => clearTimeout(counter);
  }, [timeLeft]);



  let [num1, setNum1] = useState(1)


  function pageUp() {




    setNum1(oldNum => {
      if (oldNum < allQue.length) {
        return oldNum + 1
      }
      return oldNum
    })
  }


  function pageDown() {
    setNum1(oldNum2 => {
      if (oldNum2 > 1) {
        return oldNum2 - 1
      }
      return oldNum2
    })
  }



  let [answers, setAnswers] = useState({})

  let [result, setResult] = useState(0)
  let [type, setType] = useState(false)
  let [type2, setType2] = useState(false)



  function type2Pro() {
    setType(false)
    setType2(true)
  }


  let [extra, setExtra] = useState(true)

  function typePro() {
    if (extra == true) {
      setType(true)
      setType2(false)
    }
  }


  let [type3, setType3] = useState(false)
  let [type4, setType4] = useState(false)


  function type3pro() {
    setType3(true)
    setType4(false)
    setType(false)
    setType2(false)
  }

  function type4pro() {
    setType4(true)
    setType3(false)
    setType(false)
    setType2(false)
  }

  let [main, setMain] = useState(true)

  function check() {
    let total = allQue.filter((itmes, index) => {
      return answers[index + 1] === itmes.Answer
    }).length
    setResult(total)
    setMain(false)
    setType4(false)
    setType3(false)
    setType(false)
    setType2(false)
    setExtra(false)
  }


  return (
    <>
      <div>

        <div className='w-full relative' style={{ backgroundImage: `url(${Image})`, backgroundSize: 'cover' }}>



          <div className='h-[752px] w-[312px] bg-white p-[14px] absolute shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-[8px]'>
            <div className='flex items-center justify-between pb-[16px] border-b border-dashed border-[#cccccc] mx-[16px] '>
              <p className='font-[arial] text-base font-semibold text-[#212121]' >Archive </p>
              <IoIosArrowDown className='text-[15px] text-[#757575]' />
            </div>
            <div className='mx-[16px] py-[16px]'>
              <p className='text-base text-[arial] text-[#2196f3]'>Report Abuse</p>
            </div>
          </div>


          <div className='relative w-[1280px] mx-auto h-[500px]'>
            <LuArrowLeft className='text-[24px] text-white absolute top-[40px] left-[26%]' />
            <IoMdSearch className='text-[24px] text-white absolute top-[40px] right-[4%]' />

            <div className='absolute top-[26px] left-[30%] -translateX-[30px] w-[720px] bg-white pt-[12px] px-[14px] pb-[14px] rounded-[8px] shadow-[0_0_15px_rgba(0,0,0,0.2)]'>
              <div className='w-[283px] h-[62px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)] p-[14px] ms-auto me-[15px] rounded-[8px]'>

              </div>
            </div>



            <div className='w-[748px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-[8px] absolute top-[140px] left-[33%] py-[44px] px-[54px]'>

              <div className='flex justify-between items-center mb-[16px]'>

                <h1 className='font-[roboto] text-[22px] font-bold text-[#212121] tracking-[1px] w-[550px]' >{`${allQue[num1 - 1].Profession}- [${allQue[num1 - 1].Phone}]`}</h1>

                <HiMiniShare className='text-[22px] text-[#0000008a]' />
              </div>

              <p className='text-[15px] font-[arial] text-[#0000008a]'>April 14, 2026</p>

              <div className=' w-[640px] bg-white shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-[8px] my-[40px] p-[14px]'>
                <div className=' flex justify-between items-center mb-[12px]'>
                  <div>
                    <p className='text-base font-bold text-[#d9534f]'>  ⏰ সময়: {minute} : {String(second).padStart(2, '0')}</p>
                  </div>
                  <div>
                    <button className='font-[roboto] text-[15px] py-[10px] px-[14px] bg-[#28a745] text-[#ffffff] rounded-[8px]' onClick={typePro} >পরীক্ষা সমাপ্ত করুন</button>
                  </div>
                </div>




                {
                  type === true
                    ? <div className='flex justify-between itmes-center my-[10px]'>
                      <button className='text-[22px] font-[roboto] text-[#ffffff] px-[10px] bg-[#28A745] rounded-[6px]' onClick={type2Pro}>✔</button>
                      <button className='text-[22px] font-[roboto] text-[#ffffff] px-[10px] bg-[#dc3545] rounded-[6px]' onClick={() => setType(false)}>✖</button>
                    </div>
                    : ''
                }



                {
                  type2 === true
                    ? <div className='flex justify-between itmes-center my-[10px]'>
                      <button className='text-[22px] font-[roboto] text-[#ffffff] px-[10px] bg-[#dc3545] rounded-[6px]' onClick={() => setType2(false)}>✖</button>
                      <button className='text-[22px] font-[roboto] text-[#ffffff] px-[10px] bg-[#28A745] rounded-[6px]' onClick={type3pro} >✔</button>
                    </div>
                    : ''
                }


                {
                  type3 === true
                    ? <div className='flex justify-between itmes-center my-[10px]'>
                      <button className='text-[15px] font-[roboto] text-[#ffffff] py-[10] px-[14px] bg-[#dc3545] rounded-[6px]' onClick={() => setType3(false)}>✖ বাতিল করুন</button>
                      <button className='text-[15px] font-[roboto] text-[#ffffff] px-[14px] py-[10px]  bg-[#28A745] rounded-[6px]' onClick={type4pro} >✔ জমা দিন</button>
                    </div>
                    : ''
                }

                {
                  type4 === true
                    ? <div className='flex justify-between itmes-center my-[10px]'>
                      <button className='text-[15px] font-[roboto] text-[#ffffff] px-[14px] py-[10px]  bg-[#28A745] rounded-[6px]' onClick={check} >✔ জমা দিন</button>
                      <button className='text-[15px] font-[roboto] text-[#ffffff] py-[10] px-[14px] bg-[#dc3545] rounded-[6px]' onClick={() => setType4(false)}>✖ বাতিল করুন</button>
                    </div>
                    : ''
                }





                {
                  main === true
                    ?
                    <div>
                      <div>

                        <p className='font-[roboto] text-[20px] text-[#757575] '>{`প্রশ্ন ${num1}/${allQue.length}`}</p>
                        <p className='font-[roboto] text-[20px] text-[#757575] '>{allQue[num1 - 1].Que}</p>
                        <h4 className={`font-[roboto] text-[15px] text-[#757575] w-[610px] h-[40px] p-[8px] my-[6px] rounded-[8px] cursor-pointer ${answers[num1] == 'A' ? 'bg-yellow-500' : 'bg-[#f8f9fa]'}`} onClick={() => {
                          setAnswers(oldAnswers => ({
                            ...oldAnswers,
                            [num1]: 'A'
                          }));
                        }}
                        ><span className='me-[10px]'>A</span> {allQue[num1 - 1].FirstOp}</h4>
                        <h4 className={`font-[roboto] text-[15px] text-[#757575] w-[610px] h-[40px] p-[8px] my-[6px] rounded-[8px] cursor-pointer ${answers[num1] == 'B' ? 'bg-yellow-500' : 'bg-[#f8f9fa]'}`} onClick={() => {
                          setAnswers(oldAnswers => ({
                            ...oldAnswers,
                            [num1]: 'B'
                          }));
                        }}><span className='me-[10px]'>B</span>  {allQue[num1 - 1].SecendOp} </h4>
                        <h4 className={`font-[roboto] text-[15px] text-[#757575] w-[610px] h-[40px] p-[8px] my-[6px] rounded-[8px] cursor-pointer ${answers[num1] == 'C' ? 'bg-yellow-500' : 'bg-[#f8f9fa]'}`} onClick={() => {
                          setAnswers(oldAnswers => ({
                            ...oldAnswers,
                            [num1]: 'C'
                          }));
                        }}><span className='me-[10px]'>C</span>{allQue[num1 - 1].ThirdOp}</h4>
                        <h4 className={`font-[roboto] text-[15px] text-[#757575] w-[610px] h-[40px] p-[8px] my-[6px] rounded-[8px] cursor-pointer ${answers[num1] == 'D' ? 'bg-yellow-500' : 'bg-[#f8f9fa]'}`} onClick={() => {
                          setAnswers(oldAnswers => ({
                            ...oldAnswers,
                            [num1]: 'D'
                          }));
                        }}><span className='me-[10px]'>D</span>{allQue[num1 - 1].FourthOp}</h4>

                      </div>

                      <div className='my-[12px]'>
                        <button className='font-[roboto] text-[15px] text-[#ffffff] bg-[#6c757d] w-[300px] py-[10px] px-[14px] rounded-[8px] me-[5px] cursor-pointer' onClick={pageDown}>ফিরে যান</button>
                        <button className='font-[roboto] text-[15px] text-[#ffffff] bg-[#6c757d] w-[300px] py-[10px] px-[14px] rounded-[8px] cursor-pointer' onClick={pageUp} >এগিয়ে যান</button>
                      </div>
                    </div>
                    :
                    <div>
                      <div className='w-[612px] p-[20px] my-[20px] p-[20px] border-[2px] rounded-[8px] border-[#28a745]'>
                        <h1 className='text-center text-[22px] font-[roboto] font-bold text-[#28a745]'>🎉 অভিনন্দন!</h1>
                        <h1 className='text-center text-[15px] font-[roboto] font-normal text-[#757575] my-[15px]'>আপনি সফলভাবে পরীক্ষা সম্পন্ন করেছেন</h1>
                        <h1 className='text-center text-base font-[roboto] font-bold text-[#757575]'>{`স্কোর: ${result} / ${allQue.length}`}</h1>
                      </div>
                    </div>
                }











              </div>



                  <div className='mt-[100px] border-t border-dashed pt-[50px]'>


                    <div className='flex gap-x-[30px]'>
                      <div>
                        <img src={image2} alt="" />
                      </div>
                      <div>
                        <p className='text-[15px] font-[arial] font-bold' >Ebrahim Chowdhury <span className='text-[13px] font-light text-[#2121218A] italic ms-[8px]' >October 5, 2026 at 10:12 AM</span></p>
                        <p className='font-[arial] text-[15px] font-normal text-[#757575] mt-[12px] mb-[15px]'>This comment has been removed by the author.</p>
                        <p className='font-[arial] text-[14px] font-bold text-[#2196f3] mt-[12px] mb-[15px]'>Reply</p>
                      </div>
                    </div>


                    <div className='flex gap-x-[30px] mt-[30px]'>
                      <div>
                        <img src={image2} alt="" />
                      </div>
                      <div>
                        <p className='text-[15px] font-[arial] font-bold' >Mokbul<span className='text-[13px] font-light text-[#2121218A] italic ms-[8px]' >October 19, 2026 at 10:38 AM</span></p>
                        <p className='font-[arial] text-[15px] font-normal text-[#757575] mt-[12px] mb-[15px]'>Hoiche ni</p>
                        <p className='font-[arial] text-[14px] font-bold text-[#2196f3] mt-[12px] mb-[15px]'>Reply</p>
                      </div>
                    </div>

                      <p className='text-[15px] font-[roboto] text-[#757575] mt-[30px]'>To leave a comment, click the button below to sign in with Google.</p>
                      <button className='font-[roboto] text-[15px] px-[16px] py-[12px] text-[#ffffff] bg-[#4285f4] mt-[10px] rounded-[4px] uppercase' >Sign in with Google</button>

                  </div>






            </div>







          </div>






          
        </div>


                  <div className='mt-[42%] ms-[55%] mb-[50px]'>
                    <div className='flex items-center gap-x-[10px]'>
                    <img src={image3} alt="" />
                    <span className='text-[15px] font-[arial] text-[#2196f3]'>Powered by Blogger</span>
                    </div>

                    <div className='ms-[1%]'>
                      <span className='font-[arial] text-[10px] text-[#757575]'>Theme images by </span>
                      <span className='font-[arial] text-[10px] text-[#2196f3]'>Michael Elkan</span>
                    </div>
                  </div>




      </div>

    </>
  )
}

export default SecondPage
