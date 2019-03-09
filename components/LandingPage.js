export default function LandingPage() {
  return (
    <div>
      <div>
        <button className='foundButton' onClick='FoundForm'>
          Found
        </button>
      </div>

      <div>
        <button className='lostButton' onClick='LostForm'>
          Lost
        </button>
      </div>
    </div>
  );
}
