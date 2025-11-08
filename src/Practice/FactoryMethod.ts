interface Button
{
  render(): void
  onClick(): void
}

class WindowsButton implements Button
{
  render(): void
  {
    console.log("윈도우 스타일 버튼 렌더링")
  }

  onClick(): void
  {
    console.log("윈도우 버튼 클릭 이벤트 처리")
  }
}

class MacButton implements Button
{
  render(): void
  {
    console.log("맥 스타일 버튼 렌더링")
  }

  onClick(): void
  {
    console.log("맥 버튼 클릭 이벤트 처리")
  }
}

abstract class Dialog
{
  abstract createButton(): Button

  renderDialog(): void
  {
    const button = this.createButton()
    button.render()
    button.onClick()
  }
}

class WindowsDialog extends Dialog
{
  createButton(): Button
  {
    return new WindowsButton()
  }
}

class MacDialog extends Dialog
{
  createButton(): Button
  {
    return new MacButton()
  }
}

function clientApp(osType: string)
{
  let dialog: Dialog

  if (osType === "Windows")
  {
    dialog = new WindowsDialog()
  }
  else
  {
    dialog = new MacDialog()
  }

  dialog.renderDialog()
}

clientApp("Windows")

clientApp("Mac")
