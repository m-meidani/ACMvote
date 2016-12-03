/**
 * Created by Mehran on 12/3/16.
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';

// Css
import './Privacy.css';

class Privacy extends React.Component {

  render() {
    return (
      <div className="PrivacyPage">
        <ul style={{lineHeight: '2em'}}>
          <h2>{'حفظ حریم شخصی'}</h2>
          <li>{'اطلاعات شخصی شما به هیچ وجه در سیستم نگه‌داری نمی‌شود.'}</li>
          <li>{'اطلاعات رای شما به هیچ وجه در اختیار هیچ‌کدام از مسولین دانشگاه و دانشجویان قرار نمی‌گیرد.'}</li>
          <li>{'رشته تحصیلی شما و سال ورود ممکن است برای بررسی‌های آماری نگه‌داری شود.'}</li>
          <li>{'دیگه از همین چیزا'}</li>
        </ul>
        <RaisedButton
          primary={true}
          label={'بازگشت به صفحه اصلی'}
          style={{margin: '12'}}
          onTouchTap={() => {browserHistory.push('/');}}
        />

      </div>
    )
  }
}

export default Privacy;