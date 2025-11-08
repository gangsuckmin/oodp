interface Visitor
{
  visitFile(file: FileElement): void
  visitFolder(folder: FolderElement): void
}

interface Element
{
  accept(visitor: Visitor): void
}

class FileElement implements Element
{
  constructor(public name: string, public size: number) {}

  accept(visitor: Visitor): void
  {
    visitor.visitFile(this)
  }
}

class FolderElement implements Element
{
  constructor(public name: string, public children: Element[] = []) {}

  accept(visitor: Visitor): void
  {
    visitor.visitFolder(this)
  }
}

class SizeCalculator implements Visitor
{
  private totalSize = 0

  visitFile(file: FileElement): void
  {
    this.totalSize += file.size
  }

  visitFolder(folder: FolderElement): void
  {
    folder.children.forEach(child => child.accept(this))
  }

  getTotalSize(): number
  {
    return this.totalSize
  }
}

class NamePrinter implements Visitor
{
  visitFile(file: FileElement): void
  {
    console.log(`파일: ${file.name}`)
  }

  visitFolder(folder: FolderElement): void
  {
    console.log(`폴더: ${folder.name}`)
    folder.children.forEach(child => child.accept(this))
  }
}

const file1 = new FileElement("a.txt", 10)
const file2 = new FileElement("b.txt", 20)
const folder = new FolderElement("docs", [file1, file2])

const sizeVisitor = new SizeCalculator()
folder.accept(sizeVisitor)
console.log("총 크기:", sizeVisitor.getTotalSize()) 

const nameVisitor = new NamePrinter()
folder.accept(nameVisitor)
