import React, { useState } from 'react';

import { Button } from 'components/button/Button';
import { Notice as DefaultNotice } from 'components/notice/Notice';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Notice',
  component: DefaultNotice
};

const margin = '1rem';
const padding = '2rem';

export const Notice = () => {
  const [ showAlert, setShowAlert ] = useState(false);
  const [ showConfirm, setShowConfirm ] = useState(false);
  const [ showPrompt, setShowPrompt ] = useState(false);

  const handleAlertClick = () => setShowAlert(true);
  const handleConfirmClick = () => setShowConfirm(true);
  const handlePromptClick = () => setShowPrompt(true);
  const handleOkPrompt = (inputValue) => console.log(inputValue);


  return (
    <div>
      <article style={{ padding }} onClick={ action('clicked') }>
        <Button onClick={ handleAlertClick } style={{ margin }}>Alert</Button>
        <Button onClick={ handleConfirmClick } style={{ margin }}>Confirm</Button>
        <Button onClick={ handlePromptClick } style={{ margin }}>Prompt</Button>
      </article>

      <DefaultNotice
        inputPlaceholder = 'Type text here'
        header='Alert'
        show={ showAlert }
        setShow={ setShowAlert }
      >
        Alert styled notice.
      </DefaultNotice>

      <DefaultNotice
        cancelFunc={ ()=> console.log('Confirm canceled.') }
        cancelText='Cancel'
        header='Confirm'
        okayFunc={ ()=> console.log('Confirm "Okay" button pressed.') }
        okayText='Okay'
        show={ showConfirm }
        setShow={ setShowConfirm }
        type='confirm'
      >
        Confirm styled notice.
      </DefaultNotice>

      <DefaultNotice
        cancelFunc={ ()=> console.log('Prompt canceled.') }
        cancelText='Cancel'
        header='Prompt'
        okayFunc={ handleOkPrompt }
        okayText='Okay'
        show={ showPrompt }
        setShow={ setShowPrompt }
        type='prompt'
      >
        Prompt styled notice.
      </DefaultNotice>
    </div>
  )
};


export const Notice_Alt_Icons = () => {
  const [ showAlert, setShowAlert ] = useState(false);
  const [ showConfirm, setShowConfirm ] = useState(false);
  const [ showPrompt, setShowPrompt ] = useState(false);

  const handleAlertClick = () => setShowAlert(true);
  const handleConfirmClick = () => setShowConfirm(true);
  const handlePromptClick = () => setShowPrompt(true);
  const handleOkPrompt = (inputValue) => console.log(inputValue);

  return (
    <div>
      <article style={{ padding }} onClick={ action('clicked') }>
        <Button onClick={ handleAlertClick } style={{ margin }}>Alert</Button>
        <Button onClick={ handleConfirmClick } style={{ margin }}>Confirm</Button>
        <Button onClick={ handlePromptClick } style={{ margin }}>Prompt</Button>
      </article>

      <DefaultNotice
        header='Alert'
        okayFunc={ ()=> console.log('Prompt "Okay" button pressed.') }
        okayText='Okay'
        show={ showAlert }
        setShow={ setShowAlert }
        variant='alt-icons'
      >
        Alert styled notice.
      </DefaultNotice>

      <DefaultNotice
        header='Confirm'
        okayFunc={ ()=> console.log('Prompt "Okay" button pressed.') }
        okayText='Okay'
        show={ showConfirm }
        setShow={ setShowConfirm }
        variant='alt-icons'
        type='confirm'
      >
        Confirm styled notice.
      </DefaultNotice>

      <DefaultNotice
        header='Prompt'
        okayText='Okay'
        okayFunc={ handleOkPrompt }
        show={ showPrompt }
        setShow={ setShowPrompt }
        variant='alt-icons'
        type='prompt'
      >
        Prompt styled notice.
      </DefaultNotice>
    </div>
  )

};