import './style.css'

const Pages = () => {
return(
<>

    <div className='containerheader' >
      <h1> URL Shortner  </h1>
    </div>
<form  >
    <div>

    <div class="mb-3"     >
  <label  style={{ display: 'flex', justifyContent: 'center' }} for="exampleFormControlTextarea1"  class="form-label">Enter Your URL</label>
  <textarea    style={{height:"10px", width:"300px"   }}  className="form-control form-control-sm" rows="3"></textarea>
</div>
    </div>

    <div class="my-button"  >
    <button > Shrink URL    </button>
    </div>

    </form> 

    </>     
)

}

export default Pages;