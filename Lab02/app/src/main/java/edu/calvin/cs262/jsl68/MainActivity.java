package edu.calvin.cs262.jsl68;

//import statements
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

/**
 * @version     3.5
 */

public class MainActivity extends AppCompatActivity {
    // class body
    /**
     * variable used for method count, setting it to 0
     */
    private int mCount = 0;
    private TextView mShowCount;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mShowCount = (TextView) findViewById(R.id.show_count);
    }

    /**
     *
     * showToast Method
     * Description: Once button "Toast" is pressed, the text "hello toast" will appear on screen
     * @param View view
     * @return no return variable
     *
     */
    public void showToast(View view) {
        Toast toast = Toast.makeText(this, R.string.toast_message,
                                                    Toast.LENGTH_SHORT);
        toast.show();
    }

    /**
     *
     * countUp Method
     * Description: Once button "Toast" is pressed, the text "hello toast" will appear on screen
     * @param View view
     * @return no return variable
     *
     */
    public void countUp(View view) {
        mCount++;
        if(mShowCount != null)
            mShowCount.setText(Integer.toString(mCount));
    }
}
