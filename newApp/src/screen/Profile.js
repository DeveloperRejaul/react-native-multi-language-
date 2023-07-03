import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
export default function Profile() {
  const { t } = useTranslation();
  return (
    <View>
      <Text style={{ fontSize: 30 }}>
        Profile {t("common:languageSelector")}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
