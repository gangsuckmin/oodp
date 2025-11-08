class AuthService
{
  login(token: string) { return token === "VALID"; }
}
class PaymentService
{
  pay(amount: number) { return amount > 0 ? "OK" : "FAIL"; }
}
class ShippingService
{
  ship(addr: string) { return addr ? `SHIP:${addr}` : "NO_ADDR"; }
}

export class OrderFacade
{
  private auth = new AuthService();
  private pay  = new PaymentService();
  private ship = new ShippingService();

  checkout({ token, amount, address }: { token:string; amount:number; address:string })
  {
    if (!this.auth.login(token)) return { ok:false, step:"auth" };
    const p = this.pay.pay(amount);
    if (p !== "OK") return { ok:false, step:"payment" };
    const s = this.ship.ship(address);
    if (!s.startsWith("SHIP:")) return { ok:false, step:"shipping" };
    return { ok:true, tracking:s };
  }
}
