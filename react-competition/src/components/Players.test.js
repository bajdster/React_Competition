import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'; 
import Players from './Players';
import store from "../store"

describe('Player management', ()=>
{
  test('Checking if there is a sign with no players ready at the start', () => {
    // Arrange
    render(
      <Provider store={store}>
        <Players />
      </Provider>
    );
  
    // Act
    // ...
  
    // Assert
    const noPlayersText = screen.getByText('There is no added players');
    expect(noPlayersText).toBeInTheDocument();
    })

})

