package io.ionic.starter;

import android.os.Bundle;
import android.os.PersistableBundle;

import androidx.annotation.Nullable;

import com.getcapacitor.BridgeActivity;
import com.newrelic.agent.android.NewRelic;


public class MainActivity extends BridgeActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    NewRelic.withApplicationToken(
      "eu01xxfc517fc0d4b05fc00c907513afd54a592863-NRMA"
    ).start(this.getApplicationContext());
  }
}
