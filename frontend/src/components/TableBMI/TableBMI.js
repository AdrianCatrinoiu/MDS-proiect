import React from "react";

export default function TableBMI(){
    return(
        <table class="blueTable">
                <tbody>
                  <tr>
                    <td>&lt;18,5</td>
                    <td>Underweight</td>
                  </tr>
                  <tr>
                    <td>18,5 - 24,9</td>
                    <td>Healthy</td>
                  </tr>
                  <tr>
                    <td>25&nbsp; -29,9</td>
                    <td>Overweight</td>
                  </tr>
                  <tr>
                    <td>30 - 34,9</td>
                    <td>Obesity</td>
                  </tr>
                  <tr>
                    <td>35&lt;</td>
                    <td>Extremely obese</td>
                  </tr>
                </tbody>
              </table>
    )
}