describe('Exercícios', () => {
    it('1a - A variável ex1 deve guardar o elemento p #ex1', () => {
        expect(document.getElementById('ex1')).toBe(ex1)
    })
    it('1b - O conteúdo do p #ex1 deverá ser "Exercício 1 resolvido"', () => {
        expect(document.getElementById('ex1').innerHTML).toBe('Exercício 1 resolvido')
    })
    it('2a - A variável ex2 deve guardar o elemento p .ex2', () => {
        expect(document.getElementsByClassName('ex2')[0]).toBe(ex2)
    })
    it('2b - O conteúdo do p .ex2 deverá ser "Exercício 2 resolvido"', () => {
        expect(document.getElementsByClassName('ex2')[0].innerHTML).toBe('Exercício 2 resolvido')
    })
    it('3a - A variável ex3 deve guardar o elemento p especificado', () => {
        expect(document.getElementsByTagName('p')[5]).toBe(ex3)
    })
    it('3b - O conteúdo do p deverá ser "Exercício 3 resolvido"', () => {
        expect(document.getElementsByTagName('p')[5].innerHTML).toBe('Exercício 3 resolvido')
    })
    it('4a - A variável ex4 deve guardar o elemento a #ex4', () => {
        expect(document.getElementById('ex4')).toBe(ex4)
    })
    it('4b - O href do a #ex4 deverá ser "http://impacta.edu.br"', () => {
        expect(document.getElementById('ex4').href).toBe('http://impacta.edu.br/')
    })
    it('5a - A variável ex5 deve guardar o elemento input #ex5', () => {
        expect(document.getElementById('ex5')).toBe(ex5)
    })
    it('5b - O conteúdo do input #ex5 deverá ser "Exercício 5 resolvido"', () => {
        expect(document.getElementById('ex5').value).toBe('Exercício 5 resolvido')
    })
    it('6a - A variável ex6 deve guardar o elemento div #ex6', () => {
        expect(document.getElementById('ex6')).toBe(ex6)
    })
    it('6b - O background do div #ex6 deverá ser "red"', () => {
        expect(document.getElementById('ex6').style.background).toBe('red')
    })
    it('7a - A variável ex7 deve guardar o elemento input #ex7', () => {
        expect(document.getElementById('ex7')).toBe(ex7)
    })
    it('7b - O conteúdo do input #ex7 deverá ser "Exercício 7 resolvido"', () => {
        expect(document.getElementById('ex7').value).toBe('Exercício 7 resolvido')
    })
    it('8a - A variável ex8 deve guardar o elemento input #ex8', () => {
        expect(document.getElementById('ex8')).toBe(ex8)
    })
    it('8b - O conteúdo do input #ex8 deverá ser ex8.value + 99', () => {
        expect(document.getElementById('ex8').value).toBe(80+99+'')
    })
    it('9a - A variável ex9 deve guardar o elemento input #ex9', () => {
        expect(document.getElementById('ex9')).toBe(ex9)
    })
    it('9b - O conteúdo do input #ex9 deverá ser ex9.value - 55', () => {
        expect(document.getElementById('ex9').value).toBe(550-55+'')
    })
    it('10a - A variável ex10 deve guardar o elemento input #ex10', () => {
        expect(document.getElementById('ex10')).toBe(ex10)
    })
    it('10b - O conteúdo do input #ex10 deverá ser ex10.value * 77', () => {
        expect(document.getElementById('ex10').value).toBe(13*77+'')
    })
    it('11a - A variável ex11 deve guardar o elemento input #ex11', () => {
        expect(document.getElementById('ex11')).toBe(ex11)
    })
    it('11b - O conteúdo do input #ex11 deverá ser ex11.value / 3', () => {
        expect(document.getElementById('ex11').value).toBe(50/3+'')
    })
    it('12a - A variável ex12 deve guardar o elemento button #ex12', () => {
        expect(document.getElementById('ex12')).toBe(ex12)
    })
    it('12b - O botão ex12 deve disparar um alert com a mensagem "Exercício 12"', () => {
        spyOn(window, 'alert');
        document.getElementById('ex12').click()
        expect(window.alert).toHaveBeenCalledWith('Exercício 12')
    })
    it('13a - A variável ex13 deve guardar o elemento button #ex13', () => {
        expect(document.getElementById('ex13')).toBe(ex13)
    })
    it('13b - O botão ex13 deve concatenar um 0 ao final do input #input-ex13', () => {
        document.getElementById('input-ex13').value = '99'
        document.getElementById('ex13').click()
        expect(document.getElementById('input-ex13').value).toBe('990')
        document.getElementById('input-ex13').value = '1'
    })
    it('14a - A variável ex14 deve guardar o elemento button #ex14', () => {
        expect(document.getElementById('ex14')).toBe(ex14)
    })
    it('14b - O botão ex14 deve somar 1 no input #input-ex14', () => {
        document.getElementById('input-ex14').value = '99'
        document.getElementById('ex14').click()
        expect(document.getElementById('input-ex14').value).toBe('100')
        document.getElementById('input-ex14').value = '1'
    })
    it('15a - O botão ex15-verde deve deixar o background da div #ex15 "green"', () => {
        document.getElementById('ex15-verde').click()
        expect(document.getElementById('ex15').style.background).toBe('green')
        document.getElementById('ex15').style.background = 'white'
    })
    it('15b - O botão ex15-azul deve deixar o background da div #ex15 "blue"', () => {
        document.getElementById('ex15-azul').click()
        expect(document.getElementById('ex15').style.background).toBe('blue')
        document.getElementById('ex15').style.background = 'white'
    })
    it('15c - O botão ex15-vermelho deve deixar o background da div #ex15 "red"', () => {
        document.getElementById('ex15-vermelho').click()
        expect(document.getElementById('ex15').style.background).toBe('red')
        document.getElementById('ex15').style.background = 'white'
    })
})
