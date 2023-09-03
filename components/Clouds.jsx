import React from 'react'

const Clouds = () => {
  return (
    <div className='hidden lg:block lg:absolute h-[145vh]'>
      <div className="clouds sticky text-black z-20 h-[75vh] w-[70vw] top-[15%]"
        style={{
          background: `url('/images/clouds.png') no-repeat 0 0/contain`,
        }}>
        <div className='w-[644px] pt-[14rem] pl-[13rem] flex flex-col items-center gap-3'>
          <h1 className="text-6xl text-center uppercase font-extrabold">
            Conecta con la naturaleza
          </h1>
          <p className="text-2xl text-center">
            Vive una experiencia única
          </p>
          <button type='button' className='bg-primary-green hover:bg-primary-green/80 text-white font-bold py-4 px-6 rounded-full'>
            {'>'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Clouds
