function UXWColors(props) {
  return (
    <div className="container">




      <UXWSubsection anchor="colors--thinking" title="Our Thinking">
        <span className="pb-12"></span>

        <p className="pb-12 max-w-prose">
          Our palette consists of neutral, pleasing tones balanced by vivid
          and eccentric colors. This color palette has been carefully chosen
          to provide versatility and function while still providing boundless
          room for expression.
      </p>
      </UXWSubsection>

      <UXWSubsection anchor="colors--palette" title="Using Our Palette">



        <p className="pb-12 max-w-prose">
          Though our palette is established, we encourage experimentation
          through blending modes and gradients. Start with the base color in
          the left column, and supplement your designs with the alternate shades
          on the right if you want to play around. You might be surprised... the
          results could be spellbinding!
        </p>
      </UXWSubsection>

      <hr className="pt-8"></hr>

      <UXWSubsection anchor="colors--primary" title="Primary Colors">

      <div className="flex flex-row">

      <div className="flex flex-auto w-2/3 uxw-bg-steel-2 border-black rounded-md shadow-inner items-center justify-center py-4 px-2 mt-4 mb-16">

        <p>
          The flexible and neutral <span className="font-bold">Magician's Cloak</span>,
          <span className="font-bold"> Acid</span>, and <span className="font-bold">Merlin's Beard</span> lead the way, providing a well-balanced foundation.
        </p>

      </div>

      </div>

        <div className="flex flex-col flex-wrap flex-grow">



          <p className="font-bold font-2xl pb-4">
            Magician's Cloak
         </p>


          <div className="flex flex-row pb-16">

            <div className="flex flex-col w-1/3">

              <div className="box rounded-full uxw-bg-magicians-cloak-1 text-white text-center h-8 pt-1 mr-4">Base color</div>

              <div className="flex flex-col uxw-bg-steel-1 rounded-lg shadow-inner pb-4 mt-4 ml-4 mr-8">
              <div className="flex flex-row p-8 items-center justify-center">
                <div className="box h-32 w-32 rounded-lg border-2 border-gray-300 uxw-bg-magicians-cloak-1 shadow-xl m-4 z-1">
                  <p className="z-2 text-left text-white pl-4 pt-2"><span className="text-black font-bold">A </span>FAIL</p>
                  <p className="z-2 text-left text-white pl-4"><span className="text-white font-bold">A </span>PASS</p>
                </div>

                <p className="text-left px-4 pt-6 col-span-2 pb-4">
                  <span className="font-bold">HEX:</span> <span className="font-normal">152145</span><br />
                  <span className="font-bold">RGB:</span> <span className="font-normal">21, 33, 69</span><br />
                  <span className="font-bold">CMYK:</span> <span className="font-normal">99, 90, 42, 46</span>
                </p>
              </div>


              <div className="mx-8 mb-4 shadow-lg">
                <UXWCodePanelHTMLCSS>
                  <div>
{`
<h1 class="uxw-bg-magicians-cloak-1">
  Your potion is complete.
</h1>
`}
                  </div>
                  <div>
{`
.uxw-bg-magicians-cloak-1 {
  background-color: #145152
}
`}
                  </div>
                </UXWCodePanelHTMLCSS>
              </div>
              </div>
              </div>








            <div className="flex flex-col w-2/3">

              <div className="box w-full rounded-full uxw-bg-steel-3 text-black text-center h-8 pt-1">Alternate shades</div>

              <div className="flex flex-col mt-7 ml-5 mr-4">

                <div className="flex flex-row mx-4 mt-4">

                  <div className="flex flex-none w-1/2 items-center justify-center">
                    <div className="box h-20 w-20 rounded-md uxw-bg-magicians-cloak-2 border-2 border-gray-300 m-4">
                      <p className="z-2 text-left text-white pl-2 pt-1"><span className="text-black font-bold">A </span>FAIL</p>
                      <p className="z-2 text-left text-white pl-2"><span className="text-white font-bold">A </span>PASS</p>
                    </div>

                    <p className="text-left p-4">
                      <span className="font-bold">HEX:</span> <span className="font-normal">4F66AD</span><br />
                      <span className="font-bold">RGB:</span> <span className="font-normal">79, 102, 173</span><br />
                      <span className="font-bold">CMYK:</span> <span className="font-normal">77, 64, 01, 00</span>
                    </p>
                  </div>

                  <div className="shadow-md m-2">
                    <UXWCodePanelHTMLCSS noWrap>
                      <div>
{`
<h1 class="uxw-bg-magicians-cloak-2">
  Your potion is complete.
</h1>
`}
                      </div>
                      <div>
{`
.uxw-bg-magicians-cloak-2 {
  background-color: #5267A7
}
`}
                      </div>
                    </UXWCodePanelHTMLCSS>
                  </div>

                </div>

                <div className="flex flex-row mx-4 mb-4">

                  <div className="flex flex-none w-1/2 items-center justify-center">
                    <div className="box h-20 w-20 rounded-md uxw-bg-magicians-cloak-3 border-2 border-gray-300 m-4">
                      <p className="z-2 text-left text-white pl-2 pt-1"><span className="text-black font-bold">A </span>FAIL</p>
                      <p className="z-2 text-left text-white pl-2"><span className="text-white font-bold">A </span>PASS</p>
                    </div>

                    <p className="text-left p-4 col-span-2">
                      <span className="font-bold">HEX:</span> <span className="font-normal">2B3D72</span><br />
                      <span className="font-bold">RGB:</span> <span className="font-normal">46, 61, 114</span><br />
                      <span className="font-bold">CMYK:</span> <span className="font-normal">96, 86, 27, 14</span>
                    </p>
                  </div>

                  <div className="shadow-md m-2">
                    <UXWCodePanelHTMLCSS noWrap>
                      <div>
{`
<h1 class="uxw-bg-magicians-cloak-3">
  Your potion is complete.
</h1>
`}
                      </div>
                      <div>
{`
.uxw-bg-magicians-cloak-3 {
  background-color: #2E3E6E
}
`}
                      </div>
                    </UXWCodePanelHTMLCSS>
                  </div>

                </div>

              </div>




            </div>


          </div>





          <div className="flex flex-col flex-wrap flex-grow">

          <p className="font-bold font-2xl pb-4">
            Acid
         </p>


          <div className="flex flex-row pb-16">

            <div className="flex flex-col w-1/3">

              <div className="box rounded-full uxw-bg-magicians-cloak-1 text-white text-center h-8 pt-1 mr-4">Base color</div>

              <div className="flex flex-col uxw-bg-steel-1 rounded-lg shadow-inner pb-4 mt-4 ml-4 mr-8">
              <div className="flex flex-row p-8 items-center justify-center">
                <div className="box h-32 w-32 rounded-lg border-2 border-gray-300 uxw-bg-acid-1 shadow-xl m-4 z-1">
                  <p className="text-left text-white pl-4 pt-2"><span className="text-black font-bold">A </span>FAIL</p>
                  <p className="text-left text-white pl-4"><span className="text-white font-bold">A </span>PASS</p>
                </div>

                <p className="text-left px-4 pt-6 col-span-2 pb-4">
                  <span className="font-bold">HEX:</span> <span className="font-normal">6331FD</span><br />
                  <span className="font-bold">RGB:</span> <span className="font-normal">99, 49, 253</span><br />
                  <span className="font-bold">CMYK:</span> <span className="font-normal">74, 76, 0, 0</span>
                </p>
              </div>

              <div className="mx-8 mb-4 shadow-lg">
                <UXWCodePanelHTMLCSS>
                  <div>
{`
<h1 class="uxw-bg-acid-1">
  The portal is open!
</h1>
`}
                  </div>
                  <div>
{`
.uxw-bg-acid-1 {
  background-color: #6331FD
}
`}
                  </div>
                </UXWCodePanelHTMLCSS>
              </div>
              </div>

            </div>


            <div className="flex flex-col w-2/3">

              <div className="box w-full rounded-full uxw-bg-steel-3 text-black text-center h-8 pt-1">Alternate shades</div>

              <div className="flex flex-col mt-7 ml-5 mr-4">

              <div className="flex flex-row mx-4 mt-4">

                <div className="flex flex-none w-1/2 items-center justify-center">
                 <div className="box h-20 w-20 rounded-md uxw-bg-acid-2 border-2 border-gray-300 m-4 z-1">
                    <p className="z-2 text-left text-black pl-2 pt-1"><span className="text-black font-bold">A </span>PASS</p>
                    <p className="z-2 text-left text-black pl-2"><span className="text-white font-bold">A </span>FAIL</p>
                 </div>

                  <p className="text-left p-4">
                    <span className="font-bold">HEX:</span> <span className="font-normal">D8CBFF</span><br />
                    <span className="font-bold">RGB:</span> <span className="font-normal">216, 203, 255</span><br />
                    <span className="font-bold">CMYK:</span> <span className="font-normal">14, 19, 0, 0</span>
                  </p>
                </div>

                <div className="shadow-md m-2">
                    <UXWCodePanelHTMLCSS noWrap>
                      <div>
{`
<h1 class="uxw-bg-acid-2">
  The portal is open!
</h1>
`}
                      </div>
                      <div>
{`
.uxw-bg-acid-2 {
  background-color: #D5CCFB
}
`}
                      </div>
                    </UXWCodePanelHTMLCSS>
                 </div>

                 </div>

              <div className="flex flex-row mx-4 mb-4">

                <div className="flex flex-none w-1/2 items-center justify-center">

                 <div className="box h-20 w-20 rounded-md uxw-bg-acid-3 border-2 border-gray-300 m-4 z-1">
                    <p className="z-2 text-left text-white pl-2 pt-1"><span className="text-black font-bold">A </span>FAIL</p>
                    <p className="z-2 text-left text-white pl-2"><span className="font-bold">A </span>PASS</p>
                 </div>

                  <p className="text-left p-4 col-span-2">
                    <span className="font-bold">HEX:</span> <span className="font-normal">3F18B4</span><br />
                    <span className="font-bold">RGB:</span> <span className="font-normal">63, 24, 180</span><br />
                    <span className="font-bold">CMYK:</span> <span className="font-normal">87, 91, 0, 0</span>
                  </p>

                </div>

                <div className="shadow-md m-2">
                    <UXWCodePanelHTMLCSS noWrap>
                      <div>
{`
<h1 class="uxw-bg-acid-3">
  The portal is open!
</h1>
`}
                      </div>
                      <div>
{`
.uxw-bg-acid-3 {
  background-color: #3822AC
}
`}
                      </div>
                    </UXWCodePanelHTMLCSS>
                 </div>

              </div>

              </div>
            </div>
            </div>


          <div className="flex flex-col flex-wrap flex-grow">

            <p className="font-bold font-2xl pb-4">
              Merlin's Beard
            </p>


            <div className="flex flex-row pb-10">

              <div className="flex flex-col w-1/3">

                <div className="box rounded-full uxw-bg-magicians-cloak-1 text-white text-center h-8 pt-1 mr-4">Base color</div>

                <div className="flex flex-col uxw-bg-steel-1 shadow-inner rounded-lg pb-4 mt-4 ml-4 mr-8 mt-4">
                <div className="flex flex-row p-8 items-center justify-center">

                  <div className="box h-32 w-32 rounded-lg uxw-bg-merlins-beard-1 shadow-lg border-2 border-gray-300 mt-4 ml-4 mr-8 z-1">
                    <p className="z-2 text-left pl-4 pt-2"><span className="text-black font-bold">A </span>PASS</p>
                    <p className="z-2 text-left text-black pl-2"><span className="text-white font-bold">A </span>FAIL</p>
                  </div>

                  <p className="text-left px-4 pt-6pb-4">
                    <span className="font-bold">HEX:</span> <span className="font-normal">FFFFFF</span><br />
                    <span className="font-bold">RGB:</span> <span className="font-normal">255, 255, 255</span><br />
                    <span className="font-bold">CMYK:</span> <span className="font-normal">0, 0, 0, 0</span>
                  </p>

                </div>

                <div className="mx-8 mb-4 shadow-lg">
                <UXWCodePanelHTMLCSS>
                  <div>
{`
<h1 class="uxw-bg-merlins-beard-1">
  Carve the runes carefully...
</h1>
`}
                  </div>
                  <div>
{`
.uxw-bg-merlins-beard-1 {
  background-color: #FFFFFF
}
`}
                  </div>
                </UXWCodePanelHTMLCSS>
              </div>
              </div>

              </div>


              <div className="flex flex-col w-2/3">

                <div className="box w-full rounded-full uxw-bg-steel-3 text-black text-center h-8 pt-1">Alternate shades</div>

                <div className="flex flex-col">

                  <div className="flex flex-row mx-4 mt-4">

                    <div className="flex flex-none w-1/2 items-center justify-center">

                      <div className="box h-20 w-20 rounded-md uxw-bg-merlins-beard-2 border-2 border-gray-300 m-4 z-1">
                       <p className="z-2 text-left pl-2 pt-1"><span className="text-black font-bold">A </span>PASS</p>
                       <p className="z-2 text-left text-black pl-2"><span className="text-white font-bold">A </span>FAIL</p>
                      </div>

                      <p className="text-left col-span-2 py-4">
                        <span className="font-bold">HEX:</span> <span className="font-normal">E6E6E6</span><br />
                        <span className="font-bold">RGB:</span> <span className="font-normal">230, 230, 230</span><br />
                        <span className="font-bold">CMYK:</span> <span className="font-normal">9, 6, 7, 0</span>
                      </p>

                    </div>

                    <div className="shadow-md m-2">
                      <UXWCodePanelHTMLCSS noWrap>
                        <div>
{`
<h1 class="uxw-bg-merlins-beard-2">
  Carve the runes carefully...
</h1>
`}
                        </div>
                        <div>
{`
.uxw-bg-merlins-beard-2 {
  background-color: #E6E6E6
}
`}
                        </div>
                      </UXWCodePanelHTMLCSS>
                    </div>

                  </div>

                  <div className="flex flex-row mx-4">

                    <div className="flex flex-none w-1/2 items-center justify-center">

                      <div className="box h-20 w-20 rounded-md uxw-bg-merlins-beard-3 border-2 border-gray-300 m-4">
                        <p className="z-2 text-left pl-2 pt-1"><span className="text-black font-bold">A </span>PASS</p>
                        <p className="z-2 text-left text-black pl-2"><span className="text-white font-bold">A </span>FAIL</p>
                      </div>

                      <p className="text-left col-span-2 pt-4 pb-4">
                        <span className="font-bold">HEX:</span> <span className="font-normal">C9CACB</span><br />
                        <span className="font-bold">RGB:</span> <span className="font-normal">201, 202, 203</span><br />
                        <span className="font-bold">CMYK:</span> <span className="font-normal">21, 16, 16, 0</span>
                      </p>

                    </div>

                    <div className="shadow-md m-2">
                      <UXWCodePanelHTMLCSS noWrap>
                        <div>
{`
<h1 class="uxw-bg-merlins-beard-3">
  Carve the runes carefully...
</h1>
`}
                        </div>
                        <div>
{`
.uxw-bg-merlins-beard-3 {
  background-color: #C9CACB
}
`}
                        </div>
                      </UXWCodePanelHTMLCSS>
                    </div>

                  </div>

                  <div className="flex flex-row mx-4 mb-4">

                    <div className="flex flex-none w-1/2 items-center justify-center">

                    <div className="box h-20 w-20 rounded-md uxw-bg-merlins-beard-4 border-2 border-gray-300 m-4">
                      <p className="z-2 text-left text-white pl-2 pt-1"><span className="text-black font-bold">A </span>FAIL</p>
                      <p className="z-2 text-left text-white pl-2"><span className="text-white font-bold">A </span>PASS</p>
                    </div>

                    <p className="text-left col-span-2 pt-4 pb-4">
                      <span className="font-bold">HEX:</span> <span className="font-normal">737887</span><br />
                      <span className="font-bold">RGB:</span> <span className="font-normal">115, 120, 135</span><br />
                      <span className="font-bold">CMYK:</span> <span className="font-normal">58, 48, 36, 7</span>
                    </p>
                    </div>

                    <div className="shadow-md m-2">
                      <UXWCodePanelHTMLCSS noWrap>
                        <div>
{`
<h1 class="uxw-bg-merlins-beard-4">
  Carve the runes carefully...
</h1>
`}
                        </div>
                        <div>
{`
.uxw-bg-merlins-beard-4 {
  background-color: #747887
}
`}
                        </div>
                      </UXWCodePanelHTMLCSS>
                    </div>

                  </div>



                </div>


              </div>

            </div>
        </div>
        </div>
        </div>

      </UXWSubsection>

      <hr className="pb-10"></hr>

      <div className="flex flex-row">

        <div className="flex flex-auto w-2/3 uxw-bg-steel-2 border-black rounded-md shadow-inner items-center justify-center py-4 px-2 mt-8 mb-12">
          <p>
            The foundation colors are balanced by the livelier colors <span className="font-bold">Steel,
            Mana, Jinx,</span> and <span className="font-bold">Elixir</span>. We break these into two categories.
          </p>
        </div>

      </div>

      <UXWSubsection anchor="colors--secondary" title="Secondary Colors">


  

        <div className="flex flex-auto w-full bg-transparent">

        <p className="pb-16 max-w-prose">Our secondary colors are the supporting tones
          of <span className="font-bold">Steel</span> and <span className="font-bold">Mana</span>. Use them to help build environments within your UX
          Wizards content.
        </p>
        </div>



        <div className="flex flex-col flex-wrap flex-grow">

          <p className="font-bold font-2xl pb-4">
            Steel 
          </p>


       <div className="flex flex-row pb-10">

         <div className="flex flex-col w-1/3">

          <div className="box rounded-full uxw-bg-magicians-cloak-1 text-white text-center h-8 pt-1 mr-4">Base color</div>

          <div className="flex flex-col uxw-bg-steel-1 shadow-inner rounded-lg pb-4 mt-4 ml-4 mr-8 mt-4">
          <div className="flex flex-row p-8 items-center justify-center">
            <div className="box h-32 w-32 rounded-lg border-2 border-gray-400 uxw-bg-steel-1 shadow-xl m-4 z-1">
              <p className="text-left text-black pl-4 pt-2"><span className=" font-bold">A </span>PASS</p>
              <p className="text-left text-black pl-4"><span className="text-white font-bold">A </span>FAIL</p>
            </div>

            <p className="text-left px-4 pt-6 col-span-2 pb-4">
              <span className="font-bold">HEX:</span> <span className="font-normal">E0E6FD</span><br />
              <span className="font-bold">RGB:</span> <span className="font-normal">224, 230, 253</span><br />
              <span className="font-bold">CMYK:</span> <span className="font-normal">10, 7, 0, 0</span>
            </p>

          </div>

          <div className="mx-8 mb-4 shadow-lg">

          <UXWCodePanelHTMLCSS>
              <div>
{`
<h1 class="uxw-bg-steel-1">
  As always, the mystics remain
</h1>
`}
              </div>
              <div>
{`
.uxw-bg-steel-1 {
  background-color: #E2E6FB
}
`}
              </div>
          </UXWCodePanelHTMLCSS>
          </div>
          </div>

         </div>

         <div className="flex flex-col w-2/3">

            <div className="box w-full rounded-full uxw-bg-steel-3 text-black text-center h-8 pt-1">Alternate shades</div>

            <div className="flex flex-row mt-9 ml-5 mr-4">


              <div className="flex flex-none w-1/2 items-center justify-center">

                <div className="box h-20 w-20 rounded-md uxw-bg-steel-2 border-2 border-gray-300 m-4">
                  <p className="text-left text-black pl-2 pt-4"><span className=" font-bold">A </span>PASS</p>
                  <p className="text-left text-black pl-2"><span className="text-white font-bold">A </span>FAIL</p>
                </div>

                <p className="text-left col-span-2 pt-4 pb-4">
                  <span className="font-bold">HEX:</span> <span className="font-normal">F7F9FF</span><br />
                  <span className="font-bold">RGB:</span> <span className="font-normal">247, 249, 255</span><br />
                  <span className="font-bold">CMYK:</span> <span className="font-normal">2, 1, 0, 0</span>
                </p>

              </div>

              <div className="shadow-md m-2">

                <UXWCodePanelHTMLCSS noWrap>
                  <div>
{`
<h1 class="uxw-bg-steel-2">
  As always, the mystics remain
</h1>
`}
                  </div>
                  <div>
{`
.uxw-bg-steel-2 {
  background-color: #F6F9FD
}
`}
                  </div>
                </UXWCodePanelHTMLCSS>

              </div>

            </div>

            <div className="flex flex-row mx-4 mt-4">

              <div className="flex flex-none w-1/2 items-center justify-center">

                <div className="box h-20 w-20 rounded-md uxw-bg-steel-3 border-2 border-gray-300 m-4">
                  <p className="text-left text-black pl-2 pt-1"><span className=" font-bold">A </span>PASS</p>
                  <p className="text-left text-black pl-2"><span className="text-white font-bold">A </span>FAIL</p>
               </div>

                <p className="text-left col-span-2 pt-4 pb-4">
                  <span className="font-bold">HEX:</span> <span className="font-normal">CCD5F5</span><br />
                  <span className="font-bold">RGB:</span> <span className="font-normal">204, 213, 245</span><br />
                  <span className="font-bold">CMYK:</span> <span className="font-normal">17, 12, 0, 0</span>
                </p>

              </div>

              <div className="shadow-md m-2">

                <UXWCodePanelHTMLCSS noWrap>
                  <div>
{`
<h1 class="uxw-bg-steel-3">
  As always, the mystics remain
</h1>
`}
                  </div>
                  <div>
{`
.uxw-bg-steel-3 {
  background-color: #CDD5F2
}
`}
                  </div>
                </UXWCodePanelHTMLCSS>

              </div>

            </div>

         </div>

       </div>

        </div>


        <div className="flex flex-col flex-wrap flex-grow">

          <p className="font-bold font-2xl pb-4">
            Mana 
          </p>

          <div className="flex flex-row pb-10">

            <div className="flex flex-col w-1/3">


              <div className="box rounded-full uxw-bg-magicians-cloak-1 text-white text-center h-8 pt-1 mr-4">Base color</div>

              <div className="flex flex-col uxw-bg-steel-1 shadow-inner rounded-lg pb-4 mt-4 ml-4 mr-8 mt-4">
              <div className="flex flex-row p-8 items-center justify-center">
                <div className="box h-32 w-32 rounded-lg border-2 border-gray-300 uxw-bg-mana-1 shadow-xl m-4">
                  <p className="text-left text-black pl-4 pt-2"><span className=" font-bold">A </span>FAIL</p>
                  <p className="text-left text-white pl-4"><span className="text-white font-bold">A </span>PASS</p>
                </div>

                <p className="text-left col-span-2 pt-4 pb-4">
                  <span className="font-bold">HEX:</span> <span className="font-normal">00BBD6</span><br />
                  <span className="font-bold">RGB:</span> <span className="font-normal">00, 187, 214</span><br />
                  <span className="font-bold">CMYK:</span> <span className="font-normal">71, 1, 14, 0</span>
                </p>

              </div>

              <div className="mx-8 mb-4 shadow-lg">
                <UXWCodePanelHTMLCSS>
                  <div>
{`
<h1 class="uxw-bg-mana-1">
  Remember the sigil
</h1>
`}
                  </div>
                  <div>
{`
.uxw-bg-mana-1 {
  background-color: #52B9D3
}
`}
                  </div>
                </UXWCodePanelHTMLCSS>
              </div>
              </div>


            </div>



            <div className="flex flex-col w-2/3">

              <div className="box w-full rounded-full uxw-bg-steel-3 text-black text-center h-8 pt-1">Alternate shades</div>

              <div className="flex flex-col mt-9 ml-5 mr-4">

                <div className="flex flex-row mx-4 mt-4">

                  <div className="flex flex-none w-1/2 items-center justify-center">

                    <div className="box h-20 w-20 rounded-md uxw-bg-mana-2 border-2 border-gray-300 m-4">
                      <p className="text-left text-white pl-2 pt-1"><span className="text-black font-bold">A </span>FAIL</p>
                      <p className="text-left text-white pl-2"><span className="font-bold">A </span>PASS</p>
                    </div>

                    <p className="text-left col-span-2 pt-4 pb-4">
                      <span className="font-bold">HEX:</span> <span className="font-normal">24DDFD</span><br />
                      <span className="font-bold">RGB:</span> <span className="font-normal">36, 221, 253</span><br />
                      <span className="font-bold">CMYK:</span> <span className="font-normal">57, 00, 05, 00</span>
                  </p>

                  </div>

                  <div className="shadow-md m-2">
                      <UXWCodePanelHTMLCSS noWrap>
                        <div>
{`
<h1 class="uxw-bg-mana-2">
  Remember the sigil
</h1>
`}
                        </div>
                        <div>
{`
.uxw-bg-mana-2 {
  background-color: #68DAF9
}
`}
                        </div>
                      </UXWCodePanelHTMLCSS>
                  </div>

                </div>


                <div className="flex flex-row mx-4">

                  <div className="flex flex-none w-1/2 items-center justify-center">

                    <div className="box h-20 w-20 rounded-md uxw-bg-mana-3 border-2 border-gray-300 m-4">
                      <p className="text-left text-white pl-2 pt-1"><span className="text-black font-bold">A </span>FAIL</p>
                      <p className="text-left text-white pl-2"><span className="text-white font-bold">A </span>PASS</p>
                    </div>

                    <p className="text-left col-span-2 pt-4 pb-4">
                      <span className="font-bold">HEX:</span> <span className="font-normal">1F9BB1</span><br />
                      <span className="font-bold">RGB:</span> <span className="font-normal">31, 155, 177</span><br />
                      <span className="font-bold">CMYK:</span> <span className="font-normal">78, 22, 26, 00</span>
                   </p>

                  </div>

                  <div className="shadow-md m-2">
                      <UXWCodePanelHTMLCSS noWrap>
                        <div>
{`
<h1 class="uxw-bg-mana-3">
  Remember the sigil
</h1>
`}
                        </div>
                        <div>
{`
.uxw-bg-mana-3 {
  background-color: #4999AE
}
`}
                        </div>
                      </UXWCodePanelHTMLCSS>
                    </div>

                </div>



              </div>

            </div>

          </div>

        </div>
</UXWSubsection>

        <hr className="pt-4 pb-8"></hr>

<UXWSubsection anchor="colors--accent" title="Accent Colors">

        <div className="max-w-prose bg-transparent">
        <p className="pb-12">Our brighter accent colors should be used with
          restraint and finesse. We want our designs to stand out,
          but avoid being tacky and distasteful. Use <span className="font-bold">Jinx</span> and <span className="font-bold">Elixir</span> to specifically
          draw attention to things on purpose.
        </p>
        </div>


        <div className="flex flex-col flex-wrap flex-grow">

          <p className="font-bold font-2xl pb-4">
            Jinx 
          </p>

          <div className="flex flex-row pb-10">

            <div className="flex flex-col w-1/3">

              <div className="box rounded-full uxw-bg-magicians-cloak-1 text-white text-center h-8 pt-1 mr-4">Base color</div>

              <div className="flex flex-col uxw-bg-steel-1 shadow-inner rounded-lg pb-4 mt-4 ml-4 mr-8 mt-4">
              <div className="flex flex-row p-8 items-center justify-center">
                <div className="box h-32 w-32 rounded-lg rborder-2 border-gray-300 uxw-bg-jinx-1 shadow-xl m-4">
                  <p className="text-left text-white pl-4 pt-2"><span className="text-black font-bold">A </span>FAIL</p>
                  <p className="text-left text-white pl-4"><span className="font-bold">A </span>PASS</p>
                </div>

                <p className="text-left col-span-2 pt-4 pb-4">
                  <span className="font-bold">HEX:</span> <span className="font-normal">FF6584</span><br />
                  <span className="font-bold">RGB:</span> <span className="font-normal">255, 101, 132</span><br />
                  <span className="font-bold">CMYK:</span> <span className="font-normal">0, 76, 27, 0</span>
                </p>

              </div>

              <div className="mx-8 mb-8 shadow-lg">
                <UXWCodePanelHTMLCSS>
                  <div>
{`
<h1 class="uxw-bg-jinx-1">
  The moon, the stars, the heavens
</h1>
`}
                  </div>
                  <div>
{`
.uxw-bg-jinx-1 {
  background-color: #ED6F85
}
`}
                  </div>
                </UXWCodePanelHTMLCSS>
              </div>
              </div>

            </div>


            <div className="flex flex-col w-2/3">

              <div className="box w-full rounded-full uxw-bg-steel-3 text-black text-center h-8 pt-1">Alternate shades</div>

              <div className="flex flex-row mt-9 ml-5 mr-4">

                <div className="flex flex-none w-1/2 items-center justify-center">

                  <div className="box h-20 w-20 rounded-md uxw-bg-jinx-2 border-2 border-gray-300 m-4">
                    <p className="text-left text-white pl-2 pt-1"><span className="text-black font-bold">A </span>FAIL</p>
                    <p className="text-left text-white pl-2"><span className="font-bold">A </span>PASS</p>
                  </div>

                  <p className="text-left col-span-2 pt-4 pb-4">
                    <span className="font-bold">HEX:</span> <span className="font-normal">FFA8BA</span><br />
                    <span className="font-bold">RGB:</span> <span className="font-normal">255, 168, 186</span><br />
                    <span className="font-bold">CMYK:</span> <span className="font-normal">00, 43, 09, 00</span>
                  </p>

                </div>

                <div className="shadow-md m-2">

                  <UXWCodePanelHTMLCSS noWrap>
                    <div>
{`
<h1 class="uxw-bg-jinx-2">
  The moon, the stars, the heavens
</h1>
`}
                   </div>
                   <div>
{`
.uxw-bg-jinx-2 {
  background-color: #F4ACBA
}
`}
                   </div>
                  </UXWCodePanelHTMLCSS>

                 </div>

               </div>

               <div className="flex flex-row mx-4 mt-4">

                 <div className="flex flex-none w-1/2 items-center justify-center">

                  <div className="box h-20 w-20 rounded-md uxw-bg-jinx-3 border-2 border-gray-300 m-4">
                    <p className="text-left text-white pl-2 pt-1"><span className="text-black font-bold">A </span>FAIL</p>
                    <p className="text-left text-white pl-2"><span className="font-bold">A </span>PASS</p>
                  </div>

                  <p className="text-left col-span-2 pt-4 pb-4">
                    <span className="font-bold">HEX:</span> <span className="font-normal">EA4869</span><br />
                    <span className="font-bold">RGB:</span> <span className="font-normal">234, 72, 105</span><br />
                    <span className="font-bold">CMYK:</span> <span className="font-normal">02, 87, 44, 00</span>
                  </p>

                 </div>

                 <div className="shadow-md m-2">

                    <UXWCodePanelHTMLCSS noWrap>
                      <div>
{`
<h1 class="uxw-bg-jinx-3">
  The moon, the stars, the heavens
</h1>
`}
                      </div>
                      <div>
{`
.uxw-bg-jinx-3 {
  background-color: #D9556B
}
`}
                      </div>
                    </UXWCodePanelHTMLCSS>

                  </div>


            </div>

          </div>

        </div>


        <div className="flex flex-col flex-wrap flex-grow">

          <p className="font-bold font-2xl pb-4">Elixir 
          </p>


          <div className="flex flex-row pb-10">

            <div className="flex flex-col w-1/3">

              <div className="box rounded-full uxw-bg-magicians-cloak-1 text-white text-center h-8 pt-1 mr-4">Base color</div>

              <div className="flex flex-col uxw-bg-steel-1 shadow-inner rounded-lg pb-4 mt-4 ml-4 mr-8 mt-4">
              <div className="flex flex-row p-8 items-center justify-center">
                <div className="box h-32 w-32 rounded-lg border-2 border-gray-300 uxw-bg-elixir-1 shadow-xl m-4">
                  <p className="text-left text-black pl-4 pt-2"><span className="font-bold">A </span>PASS</p>
                  <p className="text-left text-black pl-4"><span className="text-white font-bold">A </span>FAIL</p>
                </div>

                <p className="text-left px-4 pt-6 pb-4">
                  <span className="font-bold">HEX:</span> <span className="font-normal">F0B052</span><br />
                  <span className="font-bold">RGB:</span> <span className="font-normal">240, 176, 82</span><br />
                  <span className="font-bold">CMYK:</span> <span className="font-normal">05, 33, 78, 0</span>
                </p>

              </div>


              <div className="mx-8 mb-8 shadow-lg">
                <UXWCodePanelHTMLCSS>
                  <div>
{`
<h1 class="uxw-bg-elixir-1">
  Be fleet, my familiar!
</h1>
`}
                  </div>
                  <div>
{`
.uxw-bg-elixir-1 {
  background-color: #E6B161
}
`}
                  </div>
                </UXWCodePanelHTMLCSS>
              </div>
              </div>

            </div>


            <div className="flex flex-col w-2/3">

              <div className="box w-full rounded-full uxw-bg-steel-3 text-black text-center h-8 pt-1">Alternate shades</div>

              <div className="flex flex-col">

              <div className="flex flex-row mt-9 ml-5 mr-4">

                <div className="flex flex-none w-1/2 items-center justify-center">

                  <div className="box h-20 w-20 rounded-md uxw-bg-elixir-2 border-2 border-gray-300 m-4">
                    <p className="text-left text-black pl-2 pt-1"><span className=" font-bold">A </span>PASS</p>
                    <p className="text-left text-black pl-2"><span className="text-white font-bold">A </span>FAIL</p>
                  </div>

                 <p className="text-left pt-4 pb-4">
                   <span className="font-bold">HEX:</span> <span className="font-normal">FFD190</span><br />
                   <span className="font-bold">RGB:</span> <span className="font-normal">255, 209, 144</span><br />
                   <span className="font-bold">CMYK:</span> <span className="font-normal">0, 19, 48, 0</span>
                  </p>

                 </div>

                <div className="shadow-md m-2">
                  <UXWCodePanelHTMLCSS noWrap>
                    <div>
{`
<h1 class="uxw-bg-elixir-2">
  Be fleet, my familiar!
</h1>
`}
                   </div>
                   <div>
{`
.uxw-bg-elixir-2 {
  background-color: #F8D399
}
`}
                   </div>
                 </UXWCodePanelHTMLCSS>
               </div>

              </div>

            <div className="flex flex-row mx-4">

              <div className="flex flex-none w-1/2 items-center justify-center">

                <div className="box h-20 w-20 rounded-md uxw-bg-elixir-3 border-2 border-gray-300 m-4">
                  <p className="text-left text-white pl-2 pt-1"><span className="text-black font-bold">A </span>FAIL</p>
                  <p className="text-left text-white pl-2"><span className="font-bold">A </span>PASS</p>
                </div>

                <p className="text-left col-span-2 pt-4 pb-4">
                  <span className="font-bold">HEX:</span> <span className="font-normal">D99432</span><br />
                  <span className="font-bold">RGB:</span> <span className="font-normal">217, 148, 50</span><br />
                  <span className="font-bold">CMYK:</span> <span className="font-normal">14, 45, 96, 1</span>
                </p>

                </div>

                <div className="shadow-md  m-2">
                <UXWCodePanelHTMLCSS noWrap>
                  <div>
{`
<h1 class="uxw-bg-elixir-3">
  Be fleet, my familiar!
</h1>
`}
                  </div>
                  <div>
{`
.uxw-bg-elixir-3 {
  background-color: #CF9748
}
`}
                  </div>
                </UXWCodePanelHTMLCSS>
              </div>

          </div>

            </div>



          </div>


        </div>



        </div>
</div>

      </UXWSubsection>







    </div>


  )
}
