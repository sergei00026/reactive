const items = document.querySelectorAll('.box-radio__item')
const radioButtons = document.querySelectorAll('.box-radio__item input')

radioButtons?.forEach((radio: Element, idx: number) => {
      radio.addEventListener('click', () => {
         items?.forEach(item => item.classList.remove('_active'))

         items[idx].classList.add('_active')

      })
   }
)

const blocks = document.querySelectorAll('.form__numbering')

const btnOne = document.querySelector('.one')

btnOne?.addEventListener('click', (e) => {
   e.preventDefault()
   let parent = btnOne.closest('.form__numbering')
   if (parent && parent.classList.contains('form__numbering')) {
      parent.classList.add('_not-active', 'done')
      blocks[1]?.classList.remove('_not-active')
   }
})


const btnTwo = document.querySelector('.two')

btnTwo?.addEventListener('click', (e) => {
   e.preventDefault()
   let parent = btnTwo.closest('.form__numbering')
   if (parent && parent.classList.contains('form__numbering')) {
      parent.classList.add('_not-active', 'done')
      blocks[2]?.classList.remove('_not-active')
   }
})

const btnThree = document.querySelector('.three')

btnThree?.addEventListener('click', (e) => {
   e.preventDefault()
   let parent = btnThree.closest('.form__numbering')
   if (parent && parent.classList.contains('form__numbering')) {
      blocks.forEach(block => block.classList.add('dn'))
      document.querySelector('.ready')?.classList.remove('dn')
      // parent.classList.add('_not-active', 'done')
      // blocks[2]?.classList.remove('_not-active')
   }
})