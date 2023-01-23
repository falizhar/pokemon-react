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

  const commaOrDot = (index, arr) => {
    if (index === arr.length - 1) return '.';
    return ',';
  };

  console.dir(singlePokemon);

  return (
        <section className='text-base'>
            <article className='my-7'>
                <div className='flex items-center justify-start my-3'>
                    <p className='text-gray-400 font-medium mr-24'>Species</p>
                    <p className='pl-1'> {pokemonAbout.genera.find((gen) => gen.language.name === 'en')?.genus.split(' ').slice(0, -1).join(' ')}</p>
                </div>
                <div className='flex items-center justify-start my-3'>
                    <p className='text-gray-400 font-medium mr-24'>Height</p>
                    <p className='pl-2.5'>{`${feet}' ${leftPad(Number(inches) % 12, 2)}"  (${singlePokemon.height * 10}cm)`}</p>
                </div>
                <div className='flex items-center justify-start my-3'>
                    <p className='text-gray-400 font-medium mr-24'>Weight</p>
                    <p className='pl-1.5'>{`${Math.abs(singlePokemon.weight / 4.536).toFixed(1)} lbs  (${singlePokemon.weight / 10}kg)`}</p>
                </div>
                <div className='flex items-center justify-start my-3'>
                    <p className='text-gray-400 font-medium mr-24'>Abilities</p>
                    {singlePokemon.abilities.map((group, index) => (
                        <p key={index} className='mr-1 capitalize'>
                            {group.ability.name}{commaOrDot(index, singlePokemon.abilities)}
                        </p>
                    ))}
                </div>
                <div className='flex items-center justify-start my-3'>
                    <p className='text-gray-400 font-medium mr-16'>Egg Groups</p>
                    {pokemonAbout.egg_groups.map((group, index) => (
                        <p key={index} className='mr-1 capitalize'>
                            {group.name}{commaOrDot(index, pokemonAbout.egg_groups)}
                        </p>
                    ))}
                </div>
                <div className='flex items-center text-left justify-start my-1'>
                    <p className='text-gray-400 font-medium mr-20'>Gender</p>
                    {genderPercentage === -1 ? (
                        <p className='pl-5'> Genderless </p>
                    ) : (
                        <>
                            <figure className='flex items-center justify-center mx-3 pl-2'>
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
            </article>
        </section>
  );
};

export default Breeding;
