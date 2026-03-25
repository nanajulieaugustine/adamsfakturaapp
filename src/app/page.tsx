import Image from "next/image";

export default function Home() {
  return (
    <div>
      
    <h1 className="flex items-center justify-center">Hej skat</h1>

        <div className="flex flex-row gap-10 justify-center">
          <div className="flex flex-col gap-2 ">
          <h3 className="italic">Dine oplysninger</h3>
          <input name="bruger_navn" type="text" placeholder="navn" />
          <input name="bruger_adresse" type="text" placeholder="adresse" />
          <input name="bruger_email" type="text" placeholder="email"/>
          <input name="bruger_telefonnummer" type="text" placeholder="telefonnummer" />
          <input name="bruger_hjemmeside" type="text" placeholder="hjemmeside" />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="italic">Modtagers oplysninger</h3>
            <input name="modtager_navn" type="text" placeholder="navn" />
          <input name="modtager_adresse" type="text" placeholder="adresse" />
          <input name="modtager_cvr" type="text" placeholder="cvr" />
          <button>Gem bruger</button>
          </div>

               <div className="flex flex-col gap-2">
            <h3 className="italic">Kontaktpersons oplysninger</h3>
            <input name="kontaktperson_navn" type="text" placeholder="navn" />
          <input name="kontaktperson_email" type="text" placeholder="email" />
          <input name="kontaktperson_tlf" type="text" placeholder="tlf" />
          <button>Gem bruger</button>
          </div>
    </div>


    <div className="flex flex-col">
      <h3 className="text-2xl font-bold text-center mt-10">Faktura oplysninger:</h3>
        <span>Fakturanummer: </span>
        <input type="datetime-local" />

        <div className="flex gap-2">
          <p>Betaling til:</p>
          <input name="regnummer" type="text" placeholder="registreringsnummer" />
          <input name="kontonummer" type="text" placeholder="kontonummer" />
        </div>
        <input name="iban" type="text" placeholder="IBAN" />
        <p class="bg-red-500 w-fit p-1.5">Betaling skal ske via bankoverførsel.</p>
        <p>Produktion: </p>
    </div>

    <div className="flex flex-col">
      <h3 className="text-2xl font-bold text-center mt-10">Lejeperiode:</h3>
        <span>Startdato: </span>
        <input type="datetime-local" />
        <div class="flex">
        <span>Slutdato:</span>
        <input type="datetime-local" />
        <span>(dage)</span>
        </div>

        <span>Afhentning:</span>
        <span>Returnering:</span>
    </div>

      <table class="table-auto w-full mt-10">
        <thead>
          <tr>
            <th className="border min-w-100 font-bold px-4 py-2">Ydelse</th>
            <th className="border font-bold px-4 py-2">Pris</th>
            <th className="border font-bold px-4 py-2">Rabat</th>
            <th className="border font-bold px-4 py-2">Beløb</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Ydelse 1</td>
            <td className="border px-4 py-2">Pris 1</td>
            <td class="border px-4 py-2">Rabat</td>
            <td className="border px-4 py-2">200 DKK</td>
          </tr>
                    <tr>
            <td className="border px-4 py-2">Forsikring 1</td>
            <td className="border px-4 py-2">Pris 1</td>
            <td className="border px-4 py-2">--</td>
            <td className="border px-4 py-2">200 DKK</td>
          </tr>
             </tbody>
      </table>
      <p className="text-xl font-bold text-right mt-2">Totalbeløb:</p>
    <p className="italic">Bemærk: Betaling skal ske før afhentning af udstyret.</p>
    <p className="italic">Ved manglende betaling, udleveres udstyret ikke.</p>
    <p className="italic">Alle betalinger er endelige og refunderes ikke, medmindre andet er skriftligt aftalt.</p>

    <div className="mt-10">
      <hr />
      <div className="flex justify-between">
      <p className="italic">Underskrift:</p>
      <p className="pr-50">Dato:</p>
      </div>
    </div>

    </div>
  );
}
