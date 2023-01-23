import React, { useContext } from 'react';
import Male from '../../../../../Assets/male.png';
import Female from '../../../../../Assets/female.png';
import PokedexContext from '../../../../../Context/GlobalContext';

const Breeding = () => {
  const { pokemonAbout, singlePokemon } = useContext(PokedexContext);

  // Get Height and Weight
  const leftPad = (number, targetLength) => {
    let output = Math.abs(number).toString();
    while (output.length < Math.abs(targetLength)) {
      output = `0${output}`;
    }
    return output;
  };

  const inches = (singlePokemon.height * 3.93701).toFixed(0);
  const feet = Math.floor(Number(inches) / 12);

  const genderPercentage = pokemonAbout.gender_rate !== -1
    ? (pokemonAbout.gender_rate / 8) * 100
    : -1;

  const commaOrDot = (index) => {
    if (index === pokemonAbout.egg_groups.length - 1) return '.';
    return ',';
  };

  return (
        <section className='text-base'>
            <article className='my-3'>
                <div className='flex items-center text-left justify-start my-1'>
                    <p className='text-gray-400 font-medium mr-16'>Gender</p>
                    {genderPercentage === -1 ? (
                      'Genderless'
                    ) : (
                        <>
                            <figure className='flex items-center justify-center mx-3'>
                                <img
                                    className='w-5 h-5'
                                    src={Male}
                                    alt='Male symbol'
                                />
                                <figcaption className='pt-1.5 pl-2'>
                                    {100 - genderPercentage}%
                                </figcaption>
                            </figure>
                            <figure className='flex items-center justify-start mx-3'>
                                <img
                                    className='w-5 h-5'
                                    src={Female}
                                    alt='Female symbol'
                                />
                                <figcaption className='pt-1.5 pl-2'>
                                    {genderPercentage}%
                                </figcaption>
                            </figure>
                        </>
                    )}
                </div>
                <div className='flex items-center justify-start my-1.5'>
                    <p className='text-gray-400 font-medium mr-10'>Egg Groups</p>
                    {pokemonAbout.egg_groups.map((group, index) => (
                        <p key={index} className='mr-1 capitalize'>
                          {group.name}{commaOrDot(index)}
                        </p>
                    ))}
                </div>
                <div className='flex items-center justify-start my-2'>
                    <p className='text-gray-400 font-medium mr-5 mr-14'>Egg Cycle</p>
                    {pokemonAbout.egg_groups.map((group, index) => (
                        <p key={index} className='mr-1 capitalize'>
                          {group.name}{commaOrDot(index)}
                        </p>
                    ))}
                </div>
            </article>

          <article className='w-11/12 mx-auto my-4 rounded-xl px-6 py-4 flex justify-center items-center shadow-lg border-gray-100 border'>
            <div className='w-1/2 text-center'>
              <h2 className='text-gray-400 pb-0.5 font-medium'>Height</h2>
              <p>{`${feet}' ${leftPad(Number(inches) % 12, 2)}"`}</p>
            </div>
            <div className='w-1/2 text-center'>
              <h2 className='text-gray-400 pb-0.5 font-medium'>Weight</h2>
              <p>
                {Math.abs(singlePokemon.weight / 4.536).toFixed(1)} lbs
              </p>
            </div>
          </article>
        </section>
  );
};

export default Breeding;
