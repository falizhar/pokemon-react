import React from 'react';

const Header = () => {
  const paddingStyle = {
    padding: '68px 38px 0',
  };

  return (
        <header className='sticky top-0 z-20 pb-2'>
            <section
                className='flex items-center justify-between'
                style={paddingStyle}
            >
            </section>
            <section className='flex justify-between items-center'>
                <h1 className='pl-4 md:pl-16 text-3xl font-bold tracking-tighter py-5'>
                    Pokedex
                </h1>
                {/* <Pagination /> */}
            </section>
        </header>
  );
};

export default Header;
