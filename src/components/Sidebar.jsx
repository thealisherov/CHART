import { BadgeDollarSign, BanknoteArrowUp, CalendarCheck, ChevronLeft, ChevronRight, Spotlight, Telescope, Tickets, Users, Wallet } from 'lucide-react';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [hide, setHide] = useState(false);
  // UseContext bilan Dark mode qo'shgunimizcha, statedan foydalanib turamiz
  const [mode, setMode] = useState(true); 
  return (
    <div className={`${hide ? `w-[100px]` : `w-[320px]`} ${mode ? `bg-[#1b2738] text-white` : ``} h-full transition-all duration-500`}>
      <div className='w-full p-5'>
        <div className={`flex items-center justify-end mb-3`}>
          <button onClick={() => setHide(!hide)} className={`${mode ? `text-white` : ``} cursor-pointer outline-none`}>
            {hide ? (
              <ChevronRight size={35}/>
            ) : (
              <ChevronLeft size={35} /> 
            )}

          </button>
        </div>
        <div className='flex flex-col items-center justify-center gap-3'>
          <img src="https://cdn-icons-png.flaticon.com/128/610/610128.png" className={`${hide ? `w-[45px]` : `w-[70px]`} transition-all duration-500`} />
          <NavLink to={'/'} className={`${hide ? `hidden` : `flex`} text-2xl font-semibold font-[cursive] text-[#FF7058]`}>Chart Project</NavLink>
        </div>
      </div>

      <div className='flex flex-col gap-2 px-5'>
        <NavLink to={'/'} className={`${hide ? `justify-center` : ``} flex gap-2 items-center cursor-pointer hover:bg-white/10 hover:scale-105 hover:duration-130 px-3 py-3 active:duration-100 active:scale-100 rounded-lg transition-all duration-500`}>
          <Users size={20} />
          <p className={`${hide ? `hidden` : `flex`}`}>Active Users</p>
        </NavLink>
        <NavLink to={'/daily_revenue'} className={`${hide ? `justify-center` : ``} flex gap-2 items-center cursor-pointer hover:bg-white/10 hover:scale-105 hover:duration-130 px-3 py-3 active:duration-100 active:scale-100 rounded-lg transition-all duration-500`}>
          <CalendarCheck />
          <p className={`${hide ? `hidden` : `flex`}`}>Daily Revenue</p>
        </NavLink>
        <NavLink to={'/daily_sales'} className={`${hide ? `justify-center` : ``} flex gap-2 items-center cursor-pointer hover:bg-white/10 hover:scale-105 hover:duration-130 px-3 py-3 active:duration-100 active:scale-100 rounded-lg transition-all duration-500`}>
          <BadgeDollarSign />
          <p className={`${hide ? `hidden` : `flex`}`}>Daily Sales</p>
        </NavLink>
        <NavLink to={'/income_yearly'} className={`${hide ? `justify-center` : ``} flex gap-2 items-center cursor-pointer hover:bg-white/10 hover:scale-105 hover:duration-130 px-3 py-3 active:duration-100 active:scale-100 rounded-lg transition-all duration-500`}>
          <BanknoteArrowUp />
          <p className={`${hide ? `hidden` : `flex`}`}>Income Yearly</p>
        </NavLink>
        <NavLink to={'/premium_subscriptions'} className={`${hide ? `justify-center` : ``} flex gap-2 items-center cursor-pointer hover:bg-white/10 hover:scale-105 hover:duration-130 px-3 py-3 active:duration-100 active:scale-100 rounded-lg transition-all duration-500`}>
          <Wallet />
          <p className={`${hide ? `hidden` : `flex`}`}>Premium Subscriptions</p>
        </NavLink>
        <NavLink to={'/standart_subscriptions'} className={`${hide ? `justify-center` : ``} flex gap-2 items-center cursor-pointer hover:bg-white/10 hover:scale-105 hover:duration-130 px-3 py-3 active:duration-100 active:scale-100 rounded-lg transition-all duration-500`}>
          <Spotlight />
          <p className={`${hide ? `hidden` : `flex`}`}>Standart Subscriptions</p>
        </NavLink>
        <NavLink to={'/support_tickets'} className={`${hide ? `justify-center` : ``} flex gap-2 items-center cursor-pointer hover:bg-white/10 hover:scale-105 hover:duration-130 px-3 py-3 active:duration-100 active:scale-100 rounded-lg transition-all duration-500`}>
          <Tickets />
          <p className={`${hide ? `hidden` : `flex`}`}>Support Tickets</p>
        </NavLink>
        <NavLink to={'/user_visits'} className={`${hide ? `justify-center` : ``} flex gap-2 items-center cursor-pointer hover:bg-white/10 hover:scale-105 hover:duration-130 px-3 py-3 active:duration-100 active:scale-100 rounded-lg transition-all duration-500`}>
          <Telescope />
          <p className={`${hide ? `hidden` : `flex`}`}>User Visits</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar