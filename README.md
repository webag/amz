##Методы для открытия закрытия модальных окон:

#####Окно FAQ:
```javascript
open_faq_modal()
close_faq_modal()
```

#####Окно ошибки:
```javascript
open_alert_modal()
close_alert_modal()
```




#####Окно окончания триала:
```javascript
open_trial_modal()
close_trial_modal()
```

#####Остальные окна

вызываются так:
```javascript
$('id модалки или ее класс').agmodal('open');
```

закрываюстя так:
```javascript
$('id модалки или ее класс').agmodal('close');
```

Открыть модалку можно так же через клик по элементу с дата атрибутом data-ag="id модалки или ее класс".

На кнопке export повешен дата атрибут для открытия окна логин для теста.