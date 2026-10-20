const PRICELIST = [
  ['Crate of eggs (30 pcs)', '₦5,800', 'farm-gate · size mix'],
  ['Half crate (15 pcs)', '₦3,100', 'farm-gate'],
  ['Point-of-cage pullets', '₦6,500/bird', '16–18 weeks · ISA Brown'],
  ['Cockerels (live)', '₦9,500/bird', '12 weeks · dressed on request'],
  ['Old layers (spent)', '₦7,200/bird', 'sold per bird, weight honest'],
  ['Guinea fowl', '₦12,000/pair', 'seasonal · ask the gate'],
];

const TIERS = [
  { n: 'Small lot', body: 'Up to 5 crates', price: '₦5,600', unit: 'per crate', note: 'Pick-up at the gate, crates returnable.' },
  { n: 'Family lot', body: '6–15 crates', price: '₦5,350', unit: 'per crate', note: 'Free tricycle drop within 5 km.' },
  { n: 'Trade lot', body: '16+ crates', price: '₦5,000', unit: 'per crate', note: 'Van delivery Mondays & Thursdays.' },
];

const DELIVERY = [
  ['Mon', 'Ikorodu road stops'],
  ['Tue', 'Farm open · pick-up only'],
  ['Wed', 'Abeokuta route'],
  ['Thu', 'Ikorodu road stops'],
  ['Fri', 'Farm open · pick-up only'],
  ['Sat', 'Ota & Sango route'],
];

const SUPPLIES = [
  { n: 'Layers mash · 25kg', p: '₦19,500' },
  { n: 'Chick starter · 25kg', p: '₦21,000' },
  { n: 'Wood shavings bale', p: '₦2,800' },
  { n: 'Drinkers (10L)', p: '₦3,200' },
  { n: 'Feeder trays', p: '₦2,400' },
  { n: 'Egg crates (stackable)', p: '₦1,800' },
];

export default function App() {
  return (
    <div className="fp">
      <div className="top">
        <a className="brand" href="#top">FEATHER<span>FIELD</span> <small>Poultry · Ogun State</small></a>
        <nav className="tnav">
          <a href="#prices">Price list</a><a href="#crates">Wholesale</a><a href="#delivery">Delivery days</a><a href="#supplies">Feed &amp; supplies</a>
        </nav>
        <a className="tcta" href="#prices">See prices</a>
      </div>
      <header className="hero" id="top">
        <p className="kick">FARM-GATE SALES · DAILY 7AM–6PM · KEMTA ROUNDABOUT, ABEOKUTA</p>
        <h1>Eggs honest enough<br />to <em>weigh</em> in front of you.</h1>
        <p className="lede">Ten thousand birds, two boreholes, and a scale the whole market trusts. Buy at the gate or let the van find your street.</p>
        <div className="hbadge">EVERY CRATE CHECKED BY HAND</div>
      </header>
      <section className="notice">
        <h2 className="nbhead">The notice board</h2>
        <div className="nbgrid">
          <p className="npin r1">📌 New hatch arriving next Tuesday — pullets going fast, book with a deposit.</p>
          <p className="npin r2">📌 Crates are returnable. Bring them back clean, get ₦300 credit each.</p>
          <p className="npin r3">📌 Farm visits welcome. Bring rubber boots; bring your sense of smell too.</p>
        </div>
      </section>
      <section className="prices" id="prices">
        <h2>Farm price list</h2>
        <p className="psub">Prices move with feed cost; this table is rewritten weekly. The board at the gate is the final word.</p>
        <table className="ptable">
          <thead><tr><th>Item</th><th>Price</th><th>Notes</th></tr></thead>
          <tbody>
            {PRICELIST.map((p) => (
              <tr key={p[0]}><td>{p[0]}</td><td className="pp">{p[1]}</td><td className="pn2">{p[2]}</td></tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="crates" id="crates">
        <h2>Wholesale crate tiers</h2>
        <div className="tgrid">
          {TIERS.map((t) => (
            <article className="tcard" key={t.n}>
              <h3>{t.n}</h3>
              <span className="tbody">{t.body}</span>
              <div className="tprice"><b>{t.price}</b><span>{t.unit}</span></div>
              <p className="tnote">{t.note}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="delivery" id="delivery">
        <h2>Delivery days</h2>
        <div className="dstrip">
          {DELIVERY.map((d) => (
            <div className="dcell" key={d[0]}><b>{d[0]}</b><span>{d[1]}</span></div>
          ))}
        </div>
      </section>
      <section className="supplies" id="supplies">
        <h2>Feed &amp; supplies</h2>
        <div className="sgrid">
          {SUPPLIES.map((s) => (
            <div className="scard" key={s.n}><b>{s.n}</b><span>{s.p}</span></div>
          ))}
        </div>
      </section>
      <footer className="foot">
        <span>© {new Date().getFullYear()} Featherfield Poultry · Km 8 Kemta Road, Abeokuta, Ogun State.</span>
        <span>PED Forge template draft · batch-3</span>
      </footer>
    </div>
  );
}