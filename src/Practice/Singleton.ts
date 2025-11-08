class Singleton
{
  private static readonly instance: Singleton = new Singleton();

  private constructor() {}

  public static getInstance(): Singleton
  {
    return Singleton.instance;
  }

  public sayHello(): void
  {
    console.log("안녕하세요! 저는 싱글톤 인스턴스입니다 👋");
  }
}

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();

s1.sayHello();

console.log(s1 === s2);
