alturas_geral = []
altura_homens = []
generos = []

for i in range(15):
    genero = input("Digite seu gênero (H ou M): ").upper()
    generos.append(genero)
    altura = float(input("Digite sua altura (em cm): "))
    if genero == "H":
        altura_homens.append(altura)
    alturas_geral.append(altura)

alturas_geral.sort()
print(f"A pessoa mais baixa tem {alturas_geral[0]/100:.2f}m. A mais alta tem {alturas_geral[-1]/100:.2f}m.")

try:
    media_homens = sum(altura_homens) / len(altura_homens)
    print(f"A média de altura dos homens é {media_homens/100:.2f}m.")
except:
    print("Nenhum homem identificado.")

total_mulheres = generos.count("M")
print(f"Total de mulheres: {total_mulheres}.")
