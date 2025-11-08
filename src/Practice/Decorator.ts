interface Notifier
{
  send(message: string): void;
}

class BaseNotifier implements Notifier
{
  send(message: string): void
  {
    console.log(`기본 알림: ${message}`);
  }
}

abstract class NotifierDecorator implements Notifier
{
  protected wrappee: Notifier;

  constructor(notifier: Notifier)
  {
    this.wrappee = notifier;
  }

  send(message: string): void
  {
    this.wrappee.send(message);
  }
}

class EmailNotifier extends NotifierDecorator
{
  send(message: string): void
  {
    super.send(message);
    console.log(`이메일 발송: ${message}`);
  }
}

class SMSNotifier extends NotifierDecorator
{
  send(message: string): void
  {
    super.send(message);
    console.log(`SMS 발송: ${message}`);
  }
}

class SlackNotifier extends NotifierDecorator
{
  send(message: string): void
  {
    super.send(message);
    console.log(`Slack 발송: ${message}`);
  }
}

let notifier: Notifier = new BaseNotifier();

notifier = new EmailNotifier(notifier);
notifier = new SMSNotifier(notifier);
notifier = new SlackNotifier(notifier);

notifier.send("긴급 서버 장애 발생!");
